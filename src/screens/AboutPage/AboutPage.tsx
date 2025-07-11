import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { 
  UsersIcon, 
  TargetIcon, 
  AwardIcon, 
  TrendingUpIcon,
  HeartIcon,
  ShieldCheckIcon,
  GlobeIcon,
  RocketIcon
} from "lucide-react";
import { FooterSection } from "../ContactUsMobile/sections/FooterSection";
import { Navigation } from "../../components/Navigation";

export const AboutPage = (): JSX.Element => {
  const values = [
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "People First",
      description: "We believe that great careers start with putting people first. Every decision we make is centered around creating better opportunities for job seekers and employers alike."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Trust & Transparency",
      description: "We maintain the highest standards of integrity in everything we do. Our platform is built on trust, with verified job postings and transparent processes."
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      title: "Global Impact",
      description: "We're committed to connecting talent with opportunities worldwide, breaking down barriers and creating a more inclusive job market for everyone."
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously innovate to improve the job search experience, leveraging cutting-edge technology to make career connections more efficient and effective."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Former VP of Engineering at Google with 15+ years of experience in building scalable platforms."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Tech entrepreneur and former lead architect at Microsoft, passionate about connecting people through technology."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Product strategist with a background in UX design and a deep understanding of user needs in the job market."
    },
    {
      name: "David Kim",
      role: "VP of Marketing",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Marketing leader with expertise in growth strategies and building meaningful connections between brands and users."
    }
  ];

  const stats = [
    {
      number: "2015",
      label: "Founded",
      description: "Started with a vision"
    },
    {
      number: "1M+",
      label: "Users",
      description: "Trust our platform"
    },
    {
      number: "50K+",
      label: "Companies",
      description: "Post jobs daily"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Job placement success"
    }
  ];

  return (
    <div className="flex flex-col items-start bg-white w-full min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Figtree',Helvetica] font-bold text-white mb-6">
            About <span className="text-[#00D4AA]">Job Portal</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to connect talented individuals with their dream careers, 
            creating opportunities that transform lives and drive innovation forward.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#00D4AA]/10 rounded-2xl flex items-center justify-center">
                    <TargetIcon className="w-8 h-8 text-[#00D4AA]" />
                  </div>
                  <h2 className="text-3xl font-['Figtree',Helvetica] font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-700 font-['Figtree',Helvetica] leading-relaxed">
                  To revolutionize the way people find careers by creating a platform that truly understands 
                  both job seekers and employers. We believe everyone deserves to find work that not only 
                  pays the bills but also fulfills their potential and passion.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#00D4AA]/10 rounded-2xl flex items-center justify-center">
                    <TrendingUpIcon className="w-8 h-8 text-[#00D4AA]" />
                  </div>
                  <h2 className="text-3xl font-['Figtree',Helvetica] font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-700 font-['Figtree',Helvetica] leading-relaxed">
                  To become the world's most trusted career platform, where every job seeker can find 
                  their perfect role and every employer can discover exceptional talent. We envision 
                  a future where career transitions are seamless and opportunities are accessible to all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[#00D4AA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Figtree',Helvetica] font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to connecting talent with opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-['Figtree',Helvetica] font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl md:text-2xl font-['Figtree',Helvetica] font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-white/80 font-['Figtree',Helvetica]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#00D4AA]/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#00D4AA]">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 font-['Figtree',Helvetica] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Job Portal, working tirelessly to connect talent with opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#00D4AA] font-['Figtree',Helvetica] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 font-['Figtree',Helvetica] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Figtree',Helvetica] font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of professionals who have found their dream careers through our platform. 
            Your next opportunity is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-14 px-8 bg-[#00D4AA] hover:bg-[#00c299] rounded-xl font-['Figtree',Helvetica] font-semibold text-white text-lg transition-colors">
              Find Jobs
            </Button>
            <Button className="h-14 px-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] rounded-xl font-['Figtree',Helvetica] font-semibold text-lg transition-colors">
              Post a Job
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};