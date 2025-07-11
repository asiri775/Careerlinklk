import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MapPinIcon, ClockIcon, DollarSignIcon, BookmarkIcon, ShareIcon } from "lucide-react";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    posted: string;
    logo: string;
    tags: string[];
    description?: string;
  };
  variant?: "default" | "compact";
}

export const JobCard: React.FC<JobCardProps> = ({ job, variant = "default" }) => {
  if (variant === "compact") {
    return (
      <Link to={`/job/${job.id}`}>
        <Card className="bg-white border border-gray-200 hover:border-[#00D4AA] hover:shadow-lg transition-all duration-300 rounded-xl cursor-pointer group">
          <CardContent className="p-4 md:p-5">
            <div className="flex gap-3 md:gap-4 items-start">
              <img 
                src={job.logo} 
                alt={job.company} 
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold font-['Figtree',Helvetica] text-[#181A1B] mb-1 truncate">
                  {job.title}
                </h3>
                <p className="text-sm md:text-base font-semibold text-[#00D4AA] mb-2 truncate">
                  {job.company}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-gray-600 text-xs md:text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <MapPinIcon className="w-3 h-3 md:w-4 md:h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-3 h-3 md:w-4 md:h-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSignIcon className="w-3 h-3 md:w-4 md:h-4" />
                    {job.salary}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {job.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 md:px-3 md:py-1 bg-[#00D4AA]/10 text-[#00D4AA] rounded-full text-xs md:text-sm font-['Figtree',Helvetica] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Button 
                  className="p-2 md:p-2.5 bg-gray-100 hover:bg-[#00D4AA] hover:text-white rounded-lg transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  <BookmarkIcon className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <span className="text-xs md:text-sm text-gray-500 font-['Figtree',Helvetica]">
                  {job.posted}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/job/${job.id}`}>
      <Card className="bg-white border border-gray-200 hover:border-[#00D4AA] hover:shadow-lg transition-all duration-300 rounded-xl cursor-pointer group">
        <CardContent className="p-6 md:p-8">
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="flex-shrink-0">
              <img 
                src={job.logo} 
                alt={job.company} 
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold font-['Figtree',Helvetica] text-[#181A1B] mb-2">
                    {job.title}
                  </h3>
                  <p className="text-lg md:text-xl font-semibold text-[#00D4AA] mb-2">
                    {job.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="font-['Figtree',Helvetica] text-sm md:text-base">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="font-['Figtree',Helvetica] text-sm md:text-base">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSignIcon className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="font-['Figtree',Helvetica] text-sm md:text-base">{job.salary}</span>
                    </div>
                  </div>
                  {job.description && (
                    <p className="text-gray-600 font-['Figtree',Helvetica] mb-3 line-clamp-2 text-sm md:text-base">
                      {job.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 md:px-4 md:py-2 bg-[#00D4AA]/10 text-[#00D4AA] rounded-full text-sm md:text-base font-['Figtree',Helvetica] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-3">
                  <div className="flex gap-2">
                    <Button 
                      className="p-2 md:p-3 bg-gray-100 hover:bg-[#00D4AA] hover:text-white rounded-lg transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      <BookmarkIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </Button>
                    <Button 
                      className="p-2 md:p-3 bg-gray-100 hover:bg-[#00D4AA] hover:text-white rounded-lg transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ShareIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </Button>
                  </div>
                  <span className="text-sm md:text-base text-gray-500 font-['Figtree',Helvetica]">
                    {job.posted}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}; 