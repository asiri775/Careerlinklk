# 🚀 CareerLink Vercel Deployment Guide

This guide will help you deploy your CareerLink application to Vercel.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be in the GitHub repository
3. **Database**: You'll need a MySQL database (PlanetScale, Railway, or similar)

## 🗄️ Database Setup

### Option 1: PlanetScale (Recommended)
1. Go to [planetscale.com](https://planetscale.com)
2. Create a new database
3. Get your database URL
4. Add it to Vercel environment variables

### Option 2: Railway
1. Go to [railway.app](https://railway.app)
2. Create a new MySQL database
3. Get your database URL
4. Add it to Vercel environment variables

### Option 3: Local MySQL (for development)
```sql
CREATE DATABASE careerlink_db;
CREATE USER 'careerlink_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON careerlink_db.* TO 'careerlink_user'@'localhost';
FLUSH PRIVILEGES;
```

## 🔧 Environment Variables

Set these environment variables in your Vercel project:

### Required Variables
```env
DATABASE_URL=mysql://username:password@host:port/database_name
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
```

### Optional Variables
```env
NODE_ENV=production
VITE_API_URL=https://your-domain.vercel.app/api
```

## 🚀 Deployment Steps

### Step 1: Prepare Your Repository

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Ensure your repository structure:**
   ```
   careerlink/
   ├── src/                 # Frontend React code
   ├── api/                 # Backend API (Vercel serverless)
   ├── prisma/             # Database schema
   ├── package.json        # Frontend dependencies
   ├── vercel.json         # Vercel configuration
   └── README.md
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel Dashboard:**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"

2. **Import from GitHub:**
   - Select your repository: `asiri775/Careerlinklk`
   - Vercel will automatically detect it's a React project

3. **Configure Project Settings:**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add all required environment variables

5. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete

### Step 3: Database Setup

1. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

2. **Push Database Schema:**
   ```bash
   npx prisma db push
   ```

3. **Seed Database:**
   ```bash
   npm run db:seed
   ```

## 🔧 Vercel Configuration

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "VITE_API_URL": "@vite_api_url"
  }
}
```

## 🌐 Custom Domain (Optional)

1. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variables:**
   - Update `VITE_API_URL` to use your custom domain

## 🔍 Troubleshooting

### Common Issues

1. **Build Failures:**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json
   - Verify TypeScript compilation

2. **Database Connection Issues:**
   - Verify DATABASE_URL is correct
   - Check database is accessible from Vercel
   - Ensure database schema is pushed

3. **API Routes Not Working:**
   - Check api/ folder structure
   - Verify serverless function exports
   - Check environment variables

4. **Authentication Issues:**
   - Verify JWT_SECRET is set
   - Check token expiration settings
   - Ensure CORS is configured properly

### Debug Commands

```bash
# Check build locally
npm run build

# Test API locally
node api/index.js

# Check database connection
npx prisma db push

# View deployment logs
vercel logs
```

## 📊 Monitoring

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor performance and errors
- Track user interactions

### Database Monitoring
- Use your database provider's monitoring tools
- Set up alerts for connection issues
- Monitor query performance

## 🔄 Continuous Deployment

### Automatic Deployments
- Vercel automatically deploys on git push
- Configure branch protection rules
- Set up preview deployments for PRs

### Environment Management
- Use different environments for staging/production
- Configure environment-specific variables
- Set up deployment previews

## 🚀 Performance Optimization

### Frontend
- Enable Vercel's edge caching
- Optimize images and assets
- Use code splitting

### Backend
- Optimize database queries
- Use connection pooling
- Implement caching strategies

## 📞 Support

If you encounter issues:

1. **Check Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Review Build Logs**: Available in Vercel dashboard
3. **Community Support**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## 🎉 Success!

Once deployed, your CareerLink application will be available at:
- **Production**: `https://your-project.vercel.app`
- **Preview**: `https://your-project-git-branch.vercel.app`

---

**Happy Deploying! 🚀** 