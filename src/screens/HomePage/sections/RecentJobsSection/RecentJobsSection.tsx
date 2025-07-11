import React from "react";
import { JobCard } from "../../../../components/JobCard";

const recentJobs = [
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
    description: "We're looking for a senior frontend developer to join our growing team and help build the next generation of web applications."
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
    description: "Join our creative team as a UX/UI designer and help shape amazing user experiences for our products."
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
    description: "Lead our marketing efforts and drive growth for our innovative products and services."
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
    description: "Analyze complex datasets and build machine learning models to drive business insights and decisions."
  },
];

export const RecentJobsSection = () => (
  <section className="px-4 py-8 w-full md:py-12 md:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col mb-8 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl md:text-3xl font-bold font-['Figtree',Helvetica] text-[#181A1B] mb-4 md:mb-0">
          Recent Jobs Available
        </h2>
        <button className="text-[#00D4AA] font-semibold font-['Figtree',Helvetica] hover:text-[#00c299] transition-colors">
          View All Jobs →
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {recentJobs.map((job) => (
          <JobCard key={job.id} job={job} variant="default" />
        ))}
      </div>
    </div>
  </section>
); 