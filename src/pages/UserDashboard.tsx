import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Navigation } from '../components/Navigation';
import { Link } from 'react-router-dom';
import { 
  UserIcon, 
  BriefcaseIcon, 
  BookmarkIcon, 
  SettingsIcon, 
  LogOutIcon,
  EditIcon,
  EyeIcon
} from 'lucide-react';

export const UserDashboard = () => {
  const { user, logout } = useAuth();

  const recentApplications = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      status: "Applied",
      date: "2024-01-15",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 2,
      jobTitle: "UX/UI Designer",
      company: "Design Studio",
      status: "Under Review",
      date: "2024-01-12",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 3,
      jobTitle: "Marketing Manager",
      company: "Growth Co.",
      status: "Interview Scheduled",
      date: "2024-01-10",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    }
  ];

  const savedJobs = [
    {
      id: 1,
      jobTitle: "Data Scientist",
      company: "DataTech Solutions",
      date: "2024-01-14",
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 2,
      jobTitle: "Product Manager",
      company: "Innovation Labs",
      date: "2024-01-13",
      logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    }
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#00D4AA] rounded-full flex items-center justify-center">
                    <UserIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{user?.name}</h3>
                    <p className="text-gray-600">{user?.email}</p>
                    <span className="inline-block px-2 py-1 bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium rounded-full mt-1">
                      {user?.role}
                    </span>
                  </div>
                </div>
                <Link to="/profile">
                  <Button className="w-full flex items-center gap-2">
                    <EditIcon className="w-4 h-4" />
                    Edit Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Applications</span>
                    <span className="font-semibold text-gray-900">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saved Jobs</span>
                    <span className="font-semibold text-gray-900">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Interviews</span>
                    <span className="font-semibold text-gray-900">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Applications */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <BriefcaseIcon className="w-5 h-5" />
                    Recent Applications
                  </h3>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <img src={application.logo} alt={application.company} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{application.jobTitle}</h4>
                        <p className="text-gray-600">{application.company}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">{application.date}</span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            application.status === 'Applied' ? 'bg-blue-100 text-blue-800' :
                            application.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {application.status}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <EyeIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Saved Jobs */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <BookmarkIcon className="w-5 h-5" />
                    Saved Jobs
                  </h3>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {savedJobs.map((job) => (
                    <div key={job.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                      <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{job.jobTitle}</h4>
                        <p className="text-gray-600">{job.company}</p>
                        <span className="text-sm text-gray-500">{job.date}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <EyeIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}; 