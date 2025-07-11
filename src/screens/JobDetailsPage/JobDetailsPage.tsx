import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { 
  MapPinIcon, 
  ClockIcon, 
  DollarSignIcon, 
  BookmarkIcon, 
  ShareIcon,
  BuildingIcon,
  UsersIcon,
  CalendarIcon,
  CheckCircleIcon
} from "lucide-react";
import { FooterSection } from "../ContactUsMobile/sections/FooterSection";
import { Navigation } from "../../components/Navigation";

export const JobDetailsPage = (): JSX.Element => {
  const jobDetails = {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    posted: "2 days ago",
    logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    description: "We're looking for a senior frontend developer to join our growing team and help build the next generation of web applications. You'll work with cutting-edge technologies and collaborate with a talented team of designers and developers.",
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Experience with Next.js, Redux, and state management",
      "Strong understanding of responsive design and CSS frameworks",
      "Experience with testing frameworks (Jest, Cypress)",
      "Knowledge of version control systems (Git)",
      "Excellent problem-solving and communication skills"
    ],
    responsibilities: [
      "Develop and maintain high-quality web applications",
      "Collaborate with designers to implement pixel-perfect UI/UX",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and technical discussions",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with the latest frontend technologies",
      "Mentor junior developers and contribute to team growth"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible working hours and remote work options",
      "Professional development budget ($2,000/year)",
      "Unlimited PTO and paid holidays",
      "Top-tier equipment and home office setup",
      "Team retreats and company events"
    ],
    tags: ["React", "TypeScript", "Next.js", "Redux", "CSS", "JavaScript"],
    companyInfo: {
      name: "TechCorp Inc.",
      size: "100-500 employees",
      industry: "Technology",
      founded: "2015",
      website: "www.techcorp.com"
    }
  };

  const relatedJobs = [
    {
      id: 1,
      title: "React Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$70,000 - $95,000",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "Remote",
      salary: "$85,000 - $110,000",
      logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 3,
      title: "Frontend Engineer",
      company: "Design Studio",
      location: "New York, NY",
      salary: "$75,000 - $100,000",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col items-start bg-white w-full min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Job Header */}
      <section className="w-full bg-gray-50 py-8 md:py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img
                  src={jobDetails.logo}
                  alt={jobDetails.company}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-2">
                      {jobDetails.title}
                    </h1>
                    <p className="text-xl font-['Figtree',Helvetica] font-semibold text-[#00D4AA] mb-4">
                      {jobDetails.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-5 h-5" />
                        <span className="font-['Figtree',Helvetica]">{jobDetails.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-5 h-5" />
                        <span className="font-['Figtree',Helvetica]">{jobDetails.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSignIcon className="w-5 h-5" />
                        <span className="font-['Figtree',Helvetica]">{jobDetails.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-5 h-5" />
                        <span className="font-['Figtree',Helvetica]">Posted {jobDetails.posted}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobDetails.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#00D4AA]/10 text-[#00D4AA] rounded-full text-sm font-['Figtree',Helvetica] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button className="h-12 px-8 bg-[#00D4AA] hover:bg-[#00c299] rounded-xl font-['Figtree',Helvetica] font-semibold text-white text-lg transition-colors">
                      Apply Now
                    </Button>
                    <div className="flex gap-2">
                      <Button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <BookmarkIcon className="w-5 h-5 text-gray-600" />
                      </Button>
                      <Button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <ShareIcon className="w-5 h-5 text-gray-600" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <Card className="bg-white border border-gray-200 rounded-xl shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
                    Job Description
                  </h2>
                  <p className="text-gray-700 font-['Figtree',Helvetica] leading-relaxed">
                    {jobDetails.description}
                  </p>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="bg-white border border-gray-200 rounded-xl shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {jobDetails.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#00D4AA] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-['Figtree',Helvetica]">
                          {requirement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Responsibilities */}
              <Card className="bg-white border border-gray-200 rounded-xl shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
                    Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {jobDetails.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#00D4AA] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-['Figtree',Helvetica]">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-white border border-gray-200 rounded-xl shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
                    Benefits & Perks
                  </h2>
                  <ul className="space-y-3">
                    {jobDetails.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#00D4AA] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-['Figtree',Helvetica]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Company Info */}
              <Card className="bg-white border border-gray-200 rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
                    About Company
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <BuildingIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-['Figtree',Helvetica] font-semibold text-gray-900">
                          {jobDetails.companyInfo.name}
                        </p>
                        <p className="text-sm text-gray-600 font-['Figtree',Helvetica]">
                          {jobDetails.companyInfo.industry}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <UsersIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 font-['Figtree',Helvetica]">
                        {jobDetails.companyInfo.size}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 font-['Figtree',Helvetica]">
                        Founded in {jobDetails.companyInfo.founded}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-['Figtree',Helvetica] font-semibold transition-colors">
                    View Company Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Related Jobs */}
              <Card className="bg-white border border-gray-200 rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
                    Related Jobs
                  </h3>
                  <div className="space-y-4">
                    {relatedJobs.map((job) => (
                      <div key={job.id} className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-['Figtree',Helvetica] font-semibold text-gray-900 text-sm truncate">
                            {job.title}
                          </h4>
                          <p className="text-sm text-[#00D4AA] font-['Figtree',Helvetica] truncate">
                            {job.company}
                          </p>
                          <p className="text-xs text-gray-600 font-['Figtree',Helvetica]">
                            {job.location}
                          </p>
                          <p className="text-xs text-gray-600 font-['Figtree',Helvetica] font-semibold">
                            {job.salary}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};