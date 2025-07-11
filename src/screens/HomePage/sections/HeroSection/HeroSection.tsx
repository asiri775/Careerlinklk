import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { SearchIcon, MapPinIcon } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#181A1B] to-[#23272A] flex flex-col justify-start overflow-hidden">
      {/* Decorative Circles (Figma background) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-80px] w-72 h-72 bg-[#00D4AA] opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-[-60px] w-56 h-56 bg-[#00D4AA] opacity-10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-[#00D4AA] opacity-10 rounded-full blur-2xl" />
      </div>
      
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-1 w-full px-4 pt-10 pb-16 md:px-8 lg:px-12 md:pt-20 md:pb-28 z-10 relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold font-['Figtree',Helvetica] text-white mb-6 md:mb-10 leading-tight tracking-tight">
            Discover <span className="text-[#00D4AA]">Opportunities</span><br />
            That Match <span className="text-[#00D4AA]">Your Ambition</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed font-['Figtree',Helvetica]">
            Find your next career move with Sri Lanka's most trusted job portal. Search thousands of jobs, connect with top companies, and take the next step in your journey.
          </p>
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center p-4 mx-auto max-w-2xl bg-white rounded-2xl shadow-2xl md:p-6">
            <div className="relative flex-1 w-full">
              <SearchIcon className="absolute left-4 top-1/2 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
              <Input className="pl-12 h-12 md:h-14 border-0 bg-gray-100 rounded-xl text-base md:text-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA]" placeholder="Job title, keywords, or company" />
            </div>
            <div className="relative flex-1 w-full">
              <MapPinIcon className="absolute left-4 top-1/2 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
              <Input className="pl-12 h-12 md:h-14 border-0 bg-gray-100 rounded-xl text-base md:text-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA]" placeholder="City, state, or remote" />
            </div>
            <Link to="/jobs">
              <Button className="h-12 md:h-14 px-8 bg-[#00D4AA] hover:bg-[#00c299] rounded-xl font-['Figtree',Helvetica] font-semibold text-white text-base md:text-lg transition-colors shadow-none">
                Search Jobs
              </Button>
            </Link>
          </div>
          {/* Popular Searches */}
          <div className="mt-10 md:mt-14">
            <p className="text-white/70 mb-4 text-base md:text-lg font-['Figtree',Helvetica]">Popular searches:</p>
            <div className="flex flex-wrap gap-3 justify-center md:gap-4">
              {["Software Engineer", "Marketing Manager", "Data Analyst", "UX Designer", "Sales Representative"].map((term, index) => (
                <Link key={index} to={`/jobs?search=${encodeURIComponent(term)}`}>
                  <button className="px-4 py-2 bg-[#23272A] text-white rounded-full text-sm font-['Figtree',Helvetica] font-medium shadow-sm hover:bg-[#2c3136] transition-colors">
                    {term}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};