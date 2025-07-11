const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@careerlink.com' },
    update: {},
    create: {
      email: 'admin@careerlink.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      title: 'System Administrator',
      company: 'CareerLink',
      experience: '5+ years',
      education: 'Master of Computer Science',
      university: 'MIT',
      graduationYear: '2018',
      bio: 'System administrator with expertise in managing CareerLink platform.',
      skills: JSON.stringify(['System Administration', 'Database Management', 'Security', 'DevOps']),
      website: 'https://admin.careerlink.com',
      linkedin: 'https://linkedin.com/in/admin',
      github: 'https://github.com/admin',
      isPublic: true
    },
  });

  // Create demo user
  const userPassword = await bcrypt.hash('user123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'user@careerlink.com' },
    update: {},
    create: {
      email: 'user@careerlink.com',
      password: userPassword,
      name: 'John Doe',
      role: 'USER',
      phone: '+1 (555) 987-6543',
      location: 'San Francisco, CA',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      experience: '5+ years',
      education: 'Bachelor of Computer Science',
      university: 'Stanford University',
      graduationYear: '2019',
      bio: 'Passionate frontend developer with expertise in React, TypeScript, and modern web technologies.',
      skills: JSON.stringify(['React', 'TypeScript', 'Next.js', 'Node.js', 'CSS', 'JavaScript']),
      website: 'https://johndoe.dev',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      isPublic: true
    },
  });

  // Create job categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { name: 'Technology' },
      update: {},
      create: {
        name: 'Technology',
        description: 'Software development, IT, and tech roles',
        icon: '💻',
        color: '#00D4AA',
        jobCount: 0
      },
    }),
    prisma.category.upsert({
      where: { name: 'Design' },
      update: {},
      create: {
        name: 'Design',
        description: 'UI/UX, graphic design, and creative roles',
        icon: '🎨',
        color: '#FF6B6B',
        jobCount: 0
      },
    }),
    prisma.category.upsert({
      where: { name: 'Marketing' },
      update: {},
      create: {
        name: 'Marketing',
        description: 'Digital marketing, SEO, and growth roles',
        icon: '📈',
        color: '#4ECDC4',
        jobCount: 0
      },
    }),
    prisma.category.upsert({
      where: { name: 'Sales' },
      update: {},
      create: {
        name: 'Sales',
        description: 'Sales, business development, and account management',
        icon: '💰',
        color: '#45B7D1',
        jobCount: 0
      },
    }),
    prisma.category.upsert({
      where: { name: 'Finance' },
      update: {},
      create: {
        name: 'Finance',
        description: 'Accounting, banking, and financial services',
        icon: '🏦',
        color: '#96CEB4',
        jobCount: 0
      },
    }),
    prisma.category.upsert({
      where: { name: 'Healthcare' },
      update: {},
      create: {
        name: 'Healthcare',
        description: 'Medical, nursing, and healthcare administration',
        icon: '🏥',
        color: '#FFEAA7',
        jobCount: 0
      },
    }),
  ]);

  // Create sample jobs
  const jobs = await Promise.all([
    prisma.job.upsert({
      where: { id: 'job-1' },
      update: {},
      create: {
        id: 'job-1',
        title: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        type: 'FULL_TIME',
        salary: '$120,000 - $150,000',
        description: 'We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining our web applications using React, TypeScript, and modern web technologies.',
        requirements: '• 5+ years of experience with React and TypeScript\n• Strong understanding of modern JavaScript (ES6+)\n• Experience with state management (Redux, Zustand)\n• Knowledge of CSS preprocessors (Sass, Less)\n• Experience with testing frameworks (Jest, React Testing Library)\n• Understanding of responsive design principles\n• Experience with Git and version control',
        benefits: '• Competitive salary and equity\n• Health, dental, and vision insurance\n• 401(k) with company match\n• Flexible work hours and remote work options\n• Professional development budget\n• Unlimited PTO',
        logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        isActive: true,
        isFeatured: true,
        views: 150,
        applications: 12
      },
    }),
    prisma.job.upsert({
      where: { id: 'job-2' },
      update: {},
      create: {
        id: 'job-2',
        title: 'UX/UI Designer',
        company: 'Design Studio',
        location: 'New York, NY',
        type: 'FULL_TIME',
        salary: '$90,000 - $120,000',
        description: 'Join our creative team as a UX/UI Designer. You will be responsible for creating beautiful and functional user interfaces for our digital products.',
        requirements: '• 3+ years of experience in UX/UI design\n• Proficiency in Figma, Sketch, or Adobe XD\n• Strong portfolio showcasing web and mobile designs\n• Understanding of user-centered design principles\n• Experience with design systems and component libraries\n• Knowledge of accessibility standards',
        benefits: '• Competitive salary\n• Health insurance\n• Flexible work environment\n• Creative freedom\n• Professional development opportunities',
        logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        isActive: true,
        isFeatured: true,
        views: 120,
        applications: 8
      },
    }),
    prisma.job.upsert({
      where: { id: 'job-3' },
      update: {},
      create: {
        id: 'job-3',
        title: 'Marketing Manager',
        company: 'Growth Co.',
        location: 'Los Angeles, CA',
        type: 'FULL_TIME',
        salary: '$80,000 - $100,000',
        description: 'We are seeking a Marketing Manager to lead our digital marketing efforts and drive growth for our products and services.',
        requirements: '• 4+ years of experience in digital marketing\n• Experience with Google Ads, Facebook Ads, and other platforms\n• Strong analytical skills and data-driven approach\n• Experience with marketing automation tools\n• Knowledge of SEO and content marketing\n• Excellent communication skills',
        benefits: '• Competitive salary\n• Performance bonuses\n• Health benefits\n• Remote work options\n• Professional development',
        logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        isActive: true,
        isFeatured: false,
        views: 95,
        applications: 15
      },
    }),
    prisma.job.upsert({
      where: { id: 'job-4' },
      update: {},
      create: {
        id: 'job-4',
        title: 'Data Scientist',
        company: 'DataTech Solutions',
        location: 'Austin, TX',
        type: 'FULL_TIME',
        salary: '$130,000 - $160,000',
        description: 'Join our data science team to build machine learning models and extract insights from large datasets.',
        requirements: '• Master\'s degree in Computer Science, Statistics, or related field\n• 3+ years of experience in data science\n• Proficiency in Python, R, and SQL\n• Experience with machine learning frameworks (TensorFlow, PyTorch)\n• Strong statistical analysis skills\n• Experience with big data technologies',
        benefits: '• Competitive salary and equity\n• Health insurance\n• Flexible work hours\n• Professional development\n• Conference attendance',
        logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        isActive: true,
        isFeatured: true,
        views: 200,
        applications: 25
      },
    }),
    prisma.job.upsert({
      where: { id: 'job-5' },
      update: {},
      create: {
        id: 'job-5',
        title: 'Product Manager',
        company: 'Innovation Labs',
        location: 'Seattle, WA',
        type: 'FULL_TIME',
        salary: '$110,000 - $140,000',
        description: 'Lead product strategy and development for our innovative software solutions.',
        requirements: '• 5+ years of product management experience\n• Experience with agile methodologies\n• Strong analytical and problem-solving skills\n• Excellent communication and leadership abilities\n• Technical background preferred\n• Experience with user research and A/B testing',
        benefits: '• Competitive salary and equity\n• Health benefits\n• Flexible work environment\n• Professional development\n• Team building events',
        logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        isActive: true,
        isFeatured: false,
        views: 85,
        applications: 10
      },
    }),
  ]);

  // Create sample applications
  const applications = await Promise.all([
    prisma.application.upsert({
      where: { id: 'app-1' },
      update: {},
      create: {
        id: 'app-1',
        userId: user.id,
        jobId: 'job-1',
        status: 'APPLIED',
        coverLetter: 'I am excited to apply for the Senior Frontend Developer position at TechCorp Inc. With my 5+ years of experience in React and TypeScript, I believe I would be a great fit for your team.',
        appliedAt: new Date('2024-01-15')
      },
    }),
    prisma.application.upsert({
      where: { id: 'app-2' },
      update: {},
      create: {
        id: 'app-2',
        userId: user.id,
        jobId: 'job-2',
        status: 'UNDER_REVIEW',
        coverLetter: 'I am passionate about creating beautiful and functional user experiences. I would love to contribute to the Design Studio team.',
        appliedAt: new Date('2024-01-12')
      },
    }),
  ]);

  // Create sample saved jobs
  const savedJobs = await Promise.all([
    prisma.savedJob.upsert({
      where: { id: 'saved-1' },
      update: {},
      create: {
        id: 'saved-1',
        userId: user.id,
        jobId: 'job-4',
        savedAt: new Date('2024-01-14')
      },
    }),
    prisma.savedJob.upsert({
      where: { id: 'saved-2' },
      update: {},
      create: {
        id: 'saved-2',
        userId: user.id,
        jobId: 'job-5',
        savedAt: new Date('2024-01-13')
      },
    }),
  ]);

  console.log('✅ Database seeded successfully!');
  console.log(`Created ${categories.length} categories`);
  console.log(`Created ${jobs.length} jobs`);
  console.log(`Created ${applications.length} applications`);
  console.log(`Created ${savedJobs.length} saved jobs`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 