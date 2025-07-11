import React from "react";

export const StatsSection = (): JSX.Element => {
  // Figma-based stats (update these values/texts as per Figma if needed)
  const stats = [
    {
      number: "97,354",
      label: "Companies",
    },
    {
      number: "3,847,154",
      label: "Job Seekers",
    },
    {
      number: "7,532",
      label: "New Jobs",
    },
  ];

  return (
    <section className="w-full px-4 py-10 bg-white md:py-20 md:px-0">
      <div className="flex flex-col items-center mx-auto max-w-7xl">
        {/* Highlighted Jobs Available Block */}
        <div className="w-full flex flex-col items-center justify-center mb-8">
          <div className="bg-[#00D4AA] rounded-2xl px-8 py-6 flex flex-col items-center w-full max-w-xs md:max-w-md shadow-lg">
            <div className="text-3xl md:text-5xl font-extrabold font-['Figtree',Helvetica] text-white mb-2">175,324</div>
            <div className="text-base md:text-lg font-semibold font-['Figtree',Helvetica] text-white">Jobs Available</div>
          </div>
        </div>
        {/* Other Stats Grid */}
        <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-3 md:gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center bg-[#F8FAFC] rounded-2xl py-8 px-4 shadow-sm border border-[#E5E7EB]">
              <div className="text-2xl md:text-3xl font-extrabold font-['Figtree',Helvetica] text-[#00D4AA] mb-2">
                {stat.number}
              </div>
              <div className="text-base md:text-lg font-semibold font-['Figtree',Helvetica] text-[#181A1B] text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};