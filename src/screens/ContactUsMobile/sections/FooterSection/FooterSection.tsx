import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Partners", href: "/partners" },
    { name: "For Candidates", href: "/candidates" },
    { name: "For Employers", href: "/employers" },
  ];
  const jobCategories = [
    { name: "Telecommunications", href: "/jobs?category=telecommunications" },
    { name: "Hotels & Tourism", href: "/jobs?category=hotels-tourism" },
    { name: "Construction", href: "/jobs?category=construction" },
    { name: "Education", href: "/jobs?category=education" },
    { name: "Financial Services", href: "/jobs?category=financial-services" },
  ];
  return (
    <footer className="px-4 pt-16 pb-10 w-full bg-black md:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-8 mx-auto mb-10 max-w-7xl md:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-16">
        {/* Logo & Description */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="flex items-center gap-2.5">
            <Link to="/">
              <img src="/img/careerlink-logo.png" alt="Logo" className="object-contain w-[80px] h-[24px] md:w-[120px] md:h-[36px] lg:w-[312px] lg:h-[28px]" />
            </Link>
          </div>
          <p className="text-[#ffffffcc] text-base md:text-lg font-['Lexend',Helvetica] font-semibold text-center md:text-left max-w-xs md:max-w-sm">
            Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris dui nullam et.
          </p>
        </div>
        {/* Company Links */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="text-white text-lg md:text-xl font-semibold font-['Inter',Helvetica] mb-2">Company</h4>
          {companyLinks.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.href} 
              className="text-white text-base md:text-lg font-normal font-['Inter',Helvetica] hover:underline text-center md:text-left hover:text-[#00D4AA] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Job Categories */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="text-white text-lg md:text-xl font-semibold font-['Inter',Helvetica] mb-2">Job Categories</h4>
          {jobCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.href} 
              className="text-white text-base md:text-lg font-normal font-['Inter',Helvetica] hover:underline text-center md:text-left hover:text-[#00D4AA] transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h4 className="text-white text-lg md:text-xl font-semibold font-['Inter',Helvetica] mb-2">Newsletter</h4>
          <p className="text-[#ffffffcc] text-sm md:text-base font-normal font-['Inter',Helvetica] text-center md:text-left max-w-xs md:max-w-sm">
            Eu nunc pretium vitae platea. Non netus elementum vulputate
          </p>
          <Input className="h-12 md:h-14 rounded-xl border border-[#ffffff99] bg-transparent text-[#ffffff99] placeholder:text-[#ffffff99] w-full max-w-xs md:max-w-sm text-base md:text-lg" placeholder="Email Address" />
          <Button className="h-12 md:h-14 px-8 bg-[#309689] rounded-xl text-white font-bold w-full max-w-xs md:max-w-sm hover:bg-[#2a877a] text-base md:text-lg transition-colors">
            Subscribe now
          </Button>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border-t border-[#ffffff33] pt-6 md:pt-8">
        <div className="flex gap-6 md:gap-8">
          <Link to="/privacy" className="text-white text-base md:text-lg underline font-normal font-['Inter',Helvetica] hover:text-[#00D4AA] transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-white text-base md:text-lg underline font-normal font-['Inter',Helvetica] hover:text-[#00D4AA] transition-colors">
            Terms & Conditions
          </Link>
        </div>
        <div className="text-[#ffffff80] text-sm md:text-base font-normal font-['Inter',Helvetica] text-center md:text-right">
          © Copyright Job Portal 2024. Design by Figma.guru
        </div>
      </div>
    </footer>
  );
};
