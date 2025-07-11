# CareerLink - Job Platform

A modern job platform built with React, TypeScript, Tailwind CSS, and MySQL with Prisma ORM.

## 🚀 Features

- **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- **Authentication System** - User registration, login, and role-based access
- **Job Management** - Browse, apply, and save jobs
- **Profile Management** - Complete user profiles with skills and experience
- **Application Tracking** - Track job applications and their status
- **Database Integration** - MySQL database with Prisma ORM
- **RESTful API** - Express.js backend with JWT authentication

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React Icons

### Backend
- Node.js
- Express.js
- Prisma ORM
- MySQL Database
- JWT Authentication
- bcryptjs for password hashing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MySQL](https://dev.mysql.com/downloads/) (v8.0 or higher)
- [Git](https://git-scm.com/)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/careerlink.git
cd careerlink
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:
```bash
# Database Configuration
DATABASE_URL="mysql://root:password@localhost:3306/careerlink_db"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# Server Configuration
PORT=5000
NODE_ENV="development"

# Frontend Configuration
VITE_API_URL="http://localhost:5000/api"
```

### 4. Database Setup

#### Create MySQL Database
```sql
CREATE DATABASE careerlink_db;
CREATE USER 'careerlink_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON careerlink_db.* TO 'careerlink_user'@'localhost';
FLUSH PRIVILEGES;
```

#### Initialize Database with Prisma
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed database with sample data
npm run db:seed
```

### 5. Start Development Servers

#### Start Backend Server
```bash
# In one terminal
node server.js
```

#### Start Frontend Development Server
```bash
# In another terminal
npm run dev
```

### 6. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Prisma Studio**: http://localhost:5555 (run `npm run db:studio`)

## 📁 Project Structure

```
careerlink/
├── src/
│   ├── components/          # Reusable UI components
│   ├── contexts/           # React contexts (Auth)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   └── screens/           # Screen components
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.js           # Database seed data
├── server.js             # Express server
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start frontend dev server
node server.js           # Start backend server

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema to database
npm run db:migrate       # Run database migrations
npm run db:studio        # Open Prisma Studio
npm run db:seed          # Seed database with sample data

# Build
npm run build            # Build for production
```

## 🗄️ Database Schema

### Core Models
- **User** - User accounts and profiles
- **Job** - Job listings
- **Application** - Job applications
- **SavedJob** - User's saved jobs
- **Category** - Job categories

### Key Features
- JWT-based authentication
- Role-based access control (USER/ADMIN)
- File upload support (resumes, avatars)
- Search and filtering capabilities
- Application status tracking

## 🔐 Authentication

### Demo Credentials
- **Admin**: admin@careerlink.com / admin123
- **User**: user@careerlink.com / user123

### API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

## 🎨 UI Components

The project uses a custom UI component library built with:
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Lucide React** for icons
- **Class Variance Authority** for component variants

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment
```bash
# Set NODE_ENV=production
# Update DATABASE_URL for production database
node server.js
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:
1. Check the [Issues](https://github.com/your-username/careerlink/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔄 Updates

Stay updated with the latest changes:
```bash
git pull origin main
npm install
npm run db:generate
```

---

**Happy Coding! 🎉**
