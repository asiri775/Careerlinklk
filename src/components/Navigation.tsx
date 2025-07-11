import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { MenuIcon, XIcon, HomeIcon, BriefcaseIcon, BuildingIcon, InfoIcon, PhoneIcon, UserIcon } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const navigationItems = [
    { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "Jobs", href: "/jobs", icon: <BriefcaseIcon className="w-5 h-5" /> },
    { name: "Companies", href: "/companies", icon: <BuildingIcon className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <InfoIcon className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <PhoneIcon className="w-5 h-5" /> },
  ];

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#181A1B] px-4 py-4 relative z-50 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/img/careerlink-logo.png" alt="Logo" className="object-contain w-[80px] h-[24px] md:w-[100px] md:h-[30px]" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-6 items-center lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-white text-sm font-medium hover:text-[#00D4AA] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden gap-3 items-center lg:flex">
          {user ? (
            <div className="flex gap-3 items-center">
              <span className="text-sm text-white">Welcome, {user.name}</span>
              <Link to="/dashboard">
                <Button className="h-8 px-3 py-1 bg-[#00D4AA] text-white rounded-md font-semibold text-sm hover:bg-[#00c299] transition-colors duration-200 shadow-none">
                  Dashboard
                </Button>
              </Link>
              <Button 
                onClick={handleLogout}
                className="px-3 py-1 h-8 text-sm font-semibold text-white bg-gray-600 rounded-md shadow-none transition-colors duration-200 hover:bg-gray-700"
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="text-white text-sm font-semibold px-3 py-1 rounded-md hover:text-[#00D4AA] transition-colors duration-200">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <Button className="h-8 px-3 py-1 bg-[#00D4AA] text-white rounded-md font-semibold text-sm hover:bg-[#00c299] transition-colors duration-200 shadow-none">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile/Tablet Menu Button */}
        <div className="flex gap-3 items-center lg:hidden">
          {user ? (
            <div className="flex gap-2 items-center">
              <span className="text-xs text-white">Hi, {user.name}</span>
              <Link to="/dashboard">
                <Button className="h-8 px-2 py-1 bg-[#00D4AA] text-white rounded-md font-semibold text-xs hover:bg-[#00c299] transition-colors duration-200 shadow-none">
                  Dashboard
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="text-white text-sm font-semibold px-3 py-1 rounded-md hover:text-[#00D4AA] transition-colors duration-200">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <Button className="h-8 px-3 py-1 bg-[#00D4AA] text-white rounded-md font-semibold text-sm hover:bg-[#00c299] transition-colors duration-200 shadow-none">
                  Register
                </Button>
              </Link>
            </>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-[#00D4AA] transition-colors duration-200 rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile/Tablet Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-full left-0 right-0 bg-[#181A1B] border-t border-gray-700 lg:hidden z-50 shadow-xl animate-in slide-in-from-top-2 duration-300">
            <nav className="px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-3 text-white text-base font-medium py-3 px-3 rounded-lg hover:bg-white/10 hover:text-[#00D4AA] transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-gray-400">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile/Tablet Menu Footer */}
              <div className="pt-6 mt-6 border-t border-gray-700">
                <div className="flex flex-col space-y-3">
                  {user ? (
                    <>
                      <div className="flex gap-3 items-center px-3 py-2 text-white">
                        <UserIcon className="w-5 h-5 text-[#00D4AA]" />
                        <span className="text-sm">{user.name}</span>
                      </div>
                      <Link to="/dashboard">
                        <button className="w-full text-left text-white text-base font-medium py-3 px-3 rounded-lg hover:bg-white/10 hover:text-[#00D4AA] transition-all duration-200">
                          Dashboard
                        </button>
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="px-3 py-3 w-full text-base font-medium text-left text-white rounded-lg transition-all duration-200 hover:bg-white/10 hover:text-red-400"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <button className="w-full text-left text-white text-base font-medium py-3 px-3 rounded-lg hover:bg-white/10 hover:text-[#00D4AA] transition-all duration-200">
                          Sign In
                        </button>
                      </Link>
                      <Link to="/register">
                        <Button className="w-full h-10 bg-[#00D4AA] text-white rounded-lg font-semibold text-base hover:bg-[#00c299] transition-colors duration-200 shadow-none">
                          Create Account
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}; 