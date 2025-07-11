import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './screens/HomePage/HomePage';
import { JobsPage } from './screens/JobsPage/JobsPage';
import { JobDetailsPage } from './screens/JobDetailsPage/JobDetailsPage';
import { AboutPage } from './screens/AboutPage/AboutPage';
import { ContactPage } from './screens/ContactPage/ContactPage';
import { ContactUsMobile } from './screens/ContactUsMobile/ContactUsMobile';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserDashboard } from './pages/UserDashboard';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/companies" element={
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Companies</h1>
                  <p className="text-gray-600">Companies page coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/team" element={
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h1>
                  <p className="text-gray-600">Team page coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/partners" element={
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Partners</h1>
                  <p className="text-gray-600">Partners page coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/candidates" element={
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">For Candidates</h1>
                  <p className="text-gray-600">Candidates page coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/employers" element={
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">For Employers</h1>
                  <p className="text-gray-600">Employers page coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/privacy" element={
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                  <p className="text-gray-600">Privacy policy coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/terms" element={
              <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
                  <p className="text-gray-600">Terms and conditions coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute requiredRole="user">
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute requiredRole="user">
                  <ProfilePage />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Routes (for future use) */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
                      <p className="text-gray-600">Admin functionality coming soon...</p>
                    </div>
                  </div>
                </ProtectedRoute>
              } 
            />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 