import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { SearchIcon, UsersIcon, TrendingUpIcon, ShieldCheckIcon } from "lucide-react";

export const FeaturesSection = (): JSX.Element => {
  // Figma-based features (update these values/texts/icons as per Figma if needed)
  const features = [
    {
      icon: <SearchIcon className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Smart Job Matching",
      description: "Our AI-powered algorithm matches you with jobs that fit your skills, experience, and preferences perfectly."
    },
    {
      icon: <UsersIcon className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Top Companies",
      description: "Connect with leading companies and startups that are actively hiring talented professionals like you."
    },
    {
      icon: <TrendingUpIcon className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Career Growth",
      description: "Access resources, courses, and mentorship opportunities to accelerate your professional development."
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10 md:w-12 md:h-12" />,
      title: "Verified Opportunities",
      description: "All job postings are verified and screened to ensure legitimate opportunities from real employers."
    }
  ];

  return (
    <section className="w-full bg-white py-14 md:py-24 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-['Figtree',Helvetica] text-[#181A1B] text-center md:text-left w-full md:w-auto">
            Why Choose <span className="text-[#00D4AA]">CareerLink?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl text-center md:text-left mx-auto md:mx-0 font-['Figtree',Helvetica]">
            We connect talented individuals with their dream careers through innovative technology and personalized service.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#00D4AA]/10 rounded-xl mb-6 text-[#00D4AA]">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-['Figtree',Helvetica] text-[#181A1B] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-['Figtree',Helvetica] text-sm md:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};