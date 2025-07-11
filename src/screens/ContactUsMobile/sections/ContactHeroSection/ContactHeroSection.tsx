import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const ContactHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col h-[280px] items-center gap-[60px] pt-0 pb-10 px-5 relative w-full bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%),url(..//hero.png)_50%_50%_/_cover]">
      <header className="flex justify-between items-center py-5 w-full">
        <div className="flex items-center gap-2.5">
          <Link to="/">
            <div className="relative w-7 h-7">
              <img
                className="absolute w-[25px] h-[25px] top-px left-0.5"
                alt="Logo"
                src="/img/careerlink-logo.png"
              />
            </div>
          </Link>
        </div>

        <div className="flex gap-5 items-center">
          <Link to="/login" className="font-['Figtree',Helvetica] font-semibold text-white text-base">
            Login
          </Link>

          <Link to="/register">
            <Button className="h-10 px-5 py-3.5 bg-[#309589] rounded-lg font-['Figtree',Helvetica] font-semibold text-white text-base">
              Register
            </Button>
          </Link>
        </div>
      </header>

      <h1 className="text-white text-[32px] text-center font-['Figtree',Helvetica] font-bold">
        Contact Us
      </h1>
    </section>
  );
};
