import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { 
  MenuIcon, 
  XIcon, 
  HomeIcon, 
  BriefcaseIcon, 
  BuildingIcon, 
  InfoIcon, 
  PhoneIcon, 
  UserIcon,
  LayoutDashboardIcon
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useIsMobile } from "../../hooks/useIsMobile";
import { HeroSection } from "./sections/HeroSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { JobCategoriesSection } from "./sections/JobCategoriesSection";
import { StatsSection } from "./sections/StatsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { RecentJobsSection } from "./sections/RecentJobsSection";
import { FooterSection } from "../ContactUsMobile/sections/FooterSection";
import { JobCard } from "../../components/JobCard";
import { Navigation } from "../../components/Navigation";

// Mobile/Tablet HomePage component
const HomePageMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  
  const mobileJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full-time",
      posted: "2 days ago",
      salary: "$80,000 - $120,000",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "New York, NY",
      type: "Full-time",
      posted: "1 week ago",
      salary: "$70,000 - $90,000",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      tags: ["Figma", "Adobe XD", "Prototyping"],
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "Growth Co.",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "3 days ago",
      salary: "$75,000 - $95,000",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      tags: ["Digital Marketing", "SEO", "Analytics"],
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataTech Solutions",
      location: "Remote",
      type: "Full-time",
      posted: "5 days ago",
      salary: "$90,000 - $130,000",
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      tags: ["Python", "Machine Learning", "SQL"],
    },
  ];

  const navigationItems = [
    { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Jobs", href: "/jobs", icon: <BriefcaseIcon className="w-5 h-5" /> },
    { name: "Companies", href: "/companies", icon: <BuildingIcon className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <InfoIcon className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <PhoneIcon className="w-5 h-5" /> },
  ];

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col items-start w-full min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center bg-gradient-to-b from-[#181A1B] to-[#23272A] px-4 pt-4 pb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold font-['Figtree',Helvetica] text-white text-center mb-4 leading-tight">
          Discover <span className="text-[#00D4AA]">Opportunities</span><br />
          That Match <span className="text-[#00D4AA]">Your Ambition</span>
        </h1>
        <p className="text-base md:text-lg text-white/80 text-center mb-6 font-['Figtree',Helvetica]">
          Find your next career move with Sri Lanka's most trusted job portal.
        </p>
        <div className="flex flex-col gap-3 mx-auto w-full max-w-xs md:max-w-md">
          <input className="h-10 md:h-12 rounded-xl border-0 bg-gray-100 px-4 text-base font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA]" placeholder="Job title, keywords, or company" />
          <input className="h-10 md:h-12 rounded-xl border-0 bg-gray-100 px-4 text-base font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA]" placeholder="City, state, or remote" />
          <button className="h-10 md:h-12 rounded-xl bg-[#00D4AA] text-white font-semibold font-['Figtree',Helvetica] text-base mt-2">Search Jobs</button>
        </div>
        <div className="mt-6 w-full">
          <p className="text-white/70 mb-2 text-sm md:text-base font-['Figtree',Helvetica] text-center">Popular searches:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Software Engineer", "Marketing Manager", "Data Analyst", "UX Designer", "Sales Representative"].map((term, index) => (
              <button key={index} className="px-3 py-1 md:px-4 md:py-2 bg-[#23272A] text-white rounded-full text-xs md:text-sm font-['Figtree',Helvetica] font-medium shadow-sm hover:bg-[#2c3136] transition-colors">
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Jobs Section */}
      <section className="px-4 pt-6 pb-4 w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold font-['Figtree',Helvetica] text-[#181A1B]">
            Recent Jobs Available
          </h2>
          <Link to="/jobs">
            <button className="text-[#00D4AA] font-semibold font-['Figtree',Helvetica] text-sm md:text-base hover:text-[#00c299] transition-colors">
              View All →
            </button>
          </Link>
        </div>
        <div className="space-y-3 md:space-y-4">
          {mobileJobs.map((job) => (
            <JobCard key={job.id} job={job} variant="compact" />
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <div className="px-4 pt-8 pb-4 w-full"><FeaturesSection /></div>
      {/* Job Categories Section */}
      <div className="px-4 pt-4 pb-4 w-full"><JobCategoriesSection /></div>
      {/* Stats Section */}
      <div className="px-4 pt-4 pb-4 w-full"><StatsSection /></div>
      {/* Testimonials Section */}
      <div className="px-4 pt-4 pb-4 w-full"><TestimonialsSection /></div>
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};

export const HomePage = (): JSX.Element => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return <HomePageMobile />;
  }
  
  return (
    <div className="flex flex-col items-start w-full bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      {/* Recent Jobs Section */}
      <RecentJobsSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Job Categories Section */}
      <JobCategoriesSection />
      {/* Stats Section */}
      <StatsSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};