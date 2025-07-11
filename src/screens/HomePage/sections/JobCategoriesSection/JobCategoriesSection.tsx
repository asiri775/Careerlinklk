import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import {
  CodeIcon,
  PaletteIcon,
  TrendingUpIcon,
  HeartHandshakeIcon,
  BuildingIcon,
  GraduationCapIcon,
  StethoscopeIcon,
  TruckIcon
} from "lucide-react";

export const JobCategoriesSection = (): JSX.Element => {
  // Figma-based categories (update these values/texts/icons as per Figma if needed)
  const categories = [
    {
      icon: <CodeIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Technology",
      count: "2,847 jobs",
      color: "bg-blue-500"
    },
    {
      icon: <PaletteIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Design & Creative",
      count: "1,234 jobs",
      color: "bg-purple-500"
    },
    {
      icon: <TrendingUpIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Marketing & Sales",
      count: "1,876 jobs",
      color: "bg-green-500"
    },
    {
      icon: <HeartHandshakeIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Human Resources",
      count: "567 jobs",
      color: "bg-pink-500"
    },
    {
      icon: <BuildingIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Finance & Accounting",
      count: "1,432 jobs",
      color: "bg-yellow-500"
    },
    {
      icon: <GraduationCapIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Education",
      count: "892 jobs",
      color: "bg-indigo-500"
    },
    {
      icon: <StethoscopeIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Healthcare",
      count: "1,654 jobs",
      color: "bg-red-500"
    },
    {
      icon: <TruckIcon className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Operations",
      count: "743 jobs",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-28 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-['Figtree',Helvetica] text-[#181A1B] text-center md:text-left w-full md:w-auto">
            Browse Jobs by <span className="text-[#00D4AA]">Category</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl text-center md:text-left mx-auto md:mx-0 font-['Figtree',Helvetica]">
            Explore opportunities across different industries and find the perfect role for your expertise.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12 md:mb-20">
          {categories.map((category, idx) => (
            <Card key={idx} className="bg-white border border-gray-200 hover:border-[#00D4AA] hover:shadow-lg transition-all duration-300 rounded-2xl cursor-pointer group flex flex-col h-full">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 ${category.color} rounded-xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-['Figtree',Helvetica] text-[#181A1B] mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-500 font-['Figtree',Helvetica] font-medium">
                  {category.count}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center w-full">
          <Button className="h-12 md:h-14 px-8 md:px-12 bg-[#00D4AA] hover:bg-[#00c299] rounded-xl font-['Figtree',Helvetica] font-semibold text-white text-base md:text-lg transition-colors">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};