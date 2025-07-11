const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true, role: true }
    });
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CareerLink API is running' });
});

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Email, password, and name are required' });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'USER'
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true
      }
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({
      message: 'User registered successfully',
      user,
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User routes
app.get('/api/user/profile', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        phone: true,
        location: true,
        title: true,
        company: true,
        experience: true,
        education: true,
        university: true,
        graduationYear: true,
        bio: true,
        skills: true,
        website: true,
        linkedin: true,
        github: true,
        isPublic: true,
        createdAt: true,
        updatedAt: true
      }
    });

    res.json(user);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/api/user/profile', authenticateToken, async (req, res) => {
  try {
    const {
      name,
      phone,
      location,
      title,
      company,
      experience,
      education,
      university,
      graduationYear,
      bio,
      skills,
      website,
      linkedin,
      github,
      isPublic
    } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        name,
        phone,
        location,
        title,
        company,
        experience,
        education,
        university,
        graduationYear,
        bio,
        skills: skills ? JSON.stringify(skills) : undefined,
        website,
        linkedin,
        github,
        isPublic
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        phone: true,
        location: true,
        title: true,
        company: true,
        experience: true,
        education: true,
        university: true,
        graduationYear: true,
        bio: true,
        skills: true,
        website: true,
        linkedin: true,
        github: true,
        isPublic: true,
        updatedAt: true
      }
    });

    res.json({
      message: 'Profile updated successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Job routes
app.get('/api/jobs', async (req, res) => {
  try {
    const { page = 1, limit = 10, search, type, location } = req.query;
    const skip = (page - 1) * limit;

    const where = {
      isActive: true,
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { company: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } }
        ]
      }),
      ...(type && { type }),
      ...(location && { location: { contains: location, mode: 'insensitive' } })
    };

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
        skip: parseInt(skip),
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' }
      }),
      prisma.job.count({ where })
    ]);

    res.json({
      jobs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get jobs error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/jobs/:id', async (req, res) => {
  try {
    const job = await prisma.job.findUnique({
      where: { id: req.params.id }
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Increment views
    await prisma.job.update({
      where: { id: req.params.id },
      data: { views: { increment: 1 } }
    });

    res.json(job);
  } catch (error) {
    console.error('Get job error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Application routes
app.post('/api/applications', authenticateToken, async (req, res) => {
  try {
    const { jobId, coverLetter, resume } = req.body;

    if (!jobId) {
      return res.status(400).json({ error: 'Job ID is required' });
    }

    // Check if already applied
    const existingApplication = await prisma.application.findUnique({
      where: {
        userId_jobId: {
          userId: req.user.id,
          jobId
        }
      }
    });

    if (existingApplication) {
      return res.status(400).json({ error: 'Already applied to this job' });
    }

    const application = await prisma.application.create({
      data: {
        userId: req.user.id,
        jobId,
        coverLetter,
        resume
      },
      include: {
        job: {
          select: {
            title: true,
            company: true
          }
        }
      }
    });

    // Increment job applications count
    await prisma.job.update({
      where: { id: jobId },
      data: { applications: { increment: 1 } }
    });

    res.status(201).json({
      message: 'Application submitted successfully',
      application
    });
  } catch (error) {
    console.error('Create application error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/applications', authenticateToken, async (req, res) => {
  try {
    const applications = await prisma.application.findMany({
      where: { userId: req.user.id },
      include: {
        job: {
          select: {
            title: true,
            company: true,
            logo: true
          }
        }
      },
      orderBy: { appliedAt: 'desc' }
    });

    res.json(applications);
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Saved jobs routes
app.post('/api/saved-jobs', authenticateToken, async (req, res) => {
  try {
    const { jobId } = req.body;

    if (!jobId) {
      return res.status(400).json({ error: 'Job ID is required' });
    }

    const savedJob = await prisma.savedJob.create({
      data: {
        userId: req.user.id,
        jobId
      },
      include: {
        job: {
          select: {
            title: true,
            company: true,
            logo: true
          }
        }
      }
    });

    res.status(201).json({
      message: 'Job saved successfully',
      savedJob
    });
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Job already saved' });
    }
    console.error('Save job error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/saved-jobs', authenticateToken, async (req, res) => {
  try {
    const savedJobs = await prisma.savedJob.findMany({
      where: { userId: req.user.id },
      include: {
        job: {
          select: {
            title: true,
            company: true,
            logo: true
          }
        }
      },
      orderBy: { savedAt: 'desc' }
    });

    res.json(savedJobs);
  } catch (error) {
    console.error('Get saved jobs error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/api/saved-jobs/:jobId', authenticateToken, async (req, res) => {
  try {
    await prisma.savedJob.delete({
      where: {
        userId_jobId: {
          userId: req.user.id,
          jobId: req.params.jobId
        }
      }
    });

    res.json({ message: 'Job removed from saved jobs' });
  } catch (error) {
    console.error('Delete saved job error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Categories routes
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' }
    });

    res.json(categories);
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
}); 