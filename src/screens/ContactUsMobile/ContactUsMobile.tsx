import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { FooterSection } from "./sections/FooterSection";

export const ContactUsMobile = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start bg-white w-full">
      {/* Hero Section */}
      <ContactHeroSection />

      {/* Form Section */}
      <ContactFormSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
};
