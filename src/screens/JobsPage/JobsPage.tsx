import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { SearchIcon, MapPinIcon, FilterIcon } from "lucide-react";
import { FooterSection } from "../ContactUsMobile/sections/FooterSection";
import { JobCard } from "../../components/JobCard";
import { Navigation } from "../../components/Navigation";

export const JobsPage = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const categories = ["All", "Technology", "Design", "Marketing", "Finance", "Healthcare", "Education"];
  const locations = ["All", "Remote", "New York", "San Francisco", "London", "Toronto"];

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$80,000 - $120,000",
      posted: "2 days ago",
      description: "We're looking for a senior frontend developer to join our growing team and help build the next generation of web applications. You'll work with cutting-edge technologies and collaborate with a talented team of designers and developers.",
      tags: ["React", "TypeScript", "Next.js"],
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      posted: "1 week ago",
      description: "Join our creative team as a UX/UI designer and help shape amazing user experiences for our products. You'll work closely with product managers and developers to create intuitive and beautiful interfaces.",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 3,
      title: "Marketing Manager",
      company: "Growth Co.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$75,000 - $95,000",
      posted: "3 days ago",
      description: "Lead our marketing efforts and drive growth for our innovative products and services. You'll develop and execute comprehensive marketing strategies across multiple channels.",
      tags: ["Digital Marketing", "SEO", "Analytics"],
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataTech Solutions",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $130,000",
      posted: "5 days ago",
      description: "Analyze complex datasets and build machine learning models to drive business insights and decisions. You'll work with large-scale data and develop predictive models.",
      tags: ["Python", "Machine Learning", "SQL"],
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "London, UK",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      posted: "1 day ago",
      description: "Drive product strategy and work with cross-functional teams to deliver exceptional products. You'll define product vision, roadmap, and work closely with engineering and design teams.",
      tags: ["Product Strategy", "Agile", "Analytics"],
      logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudFirst",
      location: "Toronto, CA",
      type: "Full-time",
      salary: "$85,000 - $115,000",
      posted: "4 days ago",
      description: "Build and maintain scalable infrastructure and deployment pipelines. You'll work with cloud platforms and implement CI/CD practices to ensure reliable software delivery.",
      tags: ["AWS", "Docker", "Kubernetes"],
      logo: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col items-start w-full bg-gray-50">
      {/* Navigation */}
      <Navigation />
      
      {/* Search Section */}
      <section className="w-full bg-gradient-to-b from-[#181A1B] to-[#23272A] py-12 md:py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Figtree',Helvetica] text-white mb-4">
              Find Your <span className="text-[#00D4AA]">Dream Job</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-['Figtree',Helvetica] max-w-2xl mx-auto">
              Search through thousands of job listings and find the perfect opportunity that matches your skills and career goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  className="pl-12 h-12 md:h-14 border border-gray-200 rounded-xl text-base md:text-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA] focus:border-[#00D4AA]"
                  placeholder="Job title, keywords, or company"
                />
              </div>
              
              <div className="flex-1 relative">
                <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  className="pl-12 h-12 md:h-14 border border-gray-200 rounded-xl text-base md:text-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA] focus:border-[#00D4AA]"
                  placeholder="City, state, or remote"
                />
              </div>
              
              <Button className="h-12 md:h-14 px-6 md:px-8 bg-[#00D4AA] hover:bg-[#00c299] rounded-xl font-['Figtree',Helvetica] font-semibold text-white text-base md:text-lg transition-colors">
                Search Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
                <div className="flex items-center gap-2 mb-6">
                  <FilterIcon className="w-5 h-5 text-gray-600" />
                  <h3 className="text-xl font-['Figtree',Helvetica] font-bold text-gray-900">
                    Filters
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-['Figtree',Helvetica] font-semibold text-gray-900 mb-3">
                      Category
                    </h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg font-['Figtree',Helvetica] transition-colors ${
                            selectedCategory === category
                              ? "bg-[#00D4AA] text-white"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-['Figtree',Helvetica] font-semibold text-gray-900 mb-3">
                      Location
                    </h4>
                    <div className="space-y-2">
                      {locations.map((location) => (
                        <button
                          key={location}
                          onClick={() => setSelectedLocation(location)}
                          className={`w-full text-left px-3 py-2 rounded-lg font-['Figtree',Helvetica] transition-colors ${
                            selectedLocation === location
                              ? "bg-[#00D4AA] text-white"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Results */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-['Figtree',Helvetica] font-bold text-gray-900">
                  {jobs.length} Jobs Found
                </h2>
                <select className="px-4 py-2 border border-gray-200 rounded-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA] focus:border-[#00D4AA]">
                  <option>Most Recent</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                  <option>Most Relevant</option>
                </select>
              </div>

              <div className="space-y-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} variant="default" />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <Button className="px-4 py-2 border border-gray-200 rounded-lg font-['Figtree',Helvetica] hover:bg-gray-50">
                    Previous
                  </Button>
                  <Button className="px-4 py-2 bg-[#00D4AA] text-white rounded-lg font-['Figtree',Helvetica]">
                    1
                  </Button>
                  <Button className="px-4 py-2 border border-gray-200 rounded-lg font-['Figtree',Helvetica] hover:bg-gray-50">
                    2
                  </Button>
                  <Button className="px-4 py-2 border border-gray-200 rounded-lg font-['Figtree',Helvetica] hover:bg-gray-50">
                    3
                  </Button>
                  <Button className="px-4 py-2 border border-gray-200 rounded-lg font-['Figtree',Helvetica] hover:bg-gray-50">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};