import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon, 
  ClockIcon,
  MessageCircleIcon,
  HeadphonesIcon
} from "lucide-react";
import { FooterSection } from "../ContactUsMobile/sections/FooterSection";
import { Navigation } from "../../components/Navigation";

export const ContactPage = (): JSX.Element => {
  const contactMethods = [
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MailIcon className="w-8 h-8" />,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@jobportal.com",
      availability: "24/7 Response"
    },
    {
      icon: <MessageCircleIcon className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our team in real-time",
      contact: "Available on website",
      availability: "Mon-Fri, 8AM-8PM EST"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Help Center",
      description: "Browse our comprehensive FAQ",
      contact: "help.jobportal.com",
      availability: "Available 24/7"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 100",
      zipcode: "New York, NY 10001",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "San Francisco",
      address: "456 Tech Street, Floor 15",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 987-6543"
    },
    {
      city: "London",
      address: "789 Innovation Road",
      zipcode: "London, UK EC1A 1BB",
      phone: "+44 20 7123 4567"
    }
  ];

  return (
    <div className="flex flex-col items-start bg-white w-full min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Figtree',Helvetica] font-bold text-white mb-6">
            Get in <span className="text-[#00D4AA]">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-16 h-16 bg-[#00D4AA]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#00D4AA]">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 font-['Figtree',Helvetica] mb-3">
                    {method.description}
                  </p>
                  <p className="text-[#00D4AA] font-['Figtree',Helvetica] font-semibold mb-1">
                    {method.contact}
                  </p>
                  <p className="text-sm text-gray-500 font-['Figtree',Helvetica]">
                    {method.availability}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-600 font-['Figtree',Helvetica] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-['Figtree',Helvetica] font-semibold text-gray-900 mb-2">
                          First Name *
                        </label>
                        <Input
                          className="h-12 border border-gray-200 rounded-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA] focus:border-[#00D4AA]"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-['Figtree',Helvetica] font-semibold text-gray-900 mb-2">
                          Last Name *
                        </label>
                        <Input
                          className="h-12 border border-gray-200 rounded-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA] focus:border-[#00D4AA]"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-['Figtree',Helvetica] font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        className="h-12 border border-gray-200 rounded-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA] focus:border-[#00D4AA]"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-['Figtree',Helvetica] font-semibold text-gray-900 mb-2">
                        Subject *
                      </label>
                      <Input
                        className="h-12 border border-gray-200 rounded-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA] focus:border-[#00D4AA]"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-['Figtree',Helvetica] font-semibold text-gray-900 mb-2">
                        Message *
                      </label>
                      <Textarea
                        className="h-32 border border-gray-200 rounded-lg font-['Figtree',Helvetica] focus:ring-2 focus:ring-[#00D4AA] focus:border-[#00D4AA] resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button className="w-full h-12 bg-[#00D4AA] hover:bg-[#00c299] rounded-lg font-['Figtree',Helvetica] font-semibold text-white text-lg transition-colors">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl md:text-4xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-6">
                Our Offices
              </h2>
              <p className="text-lg text-gray-600 font-['Figtree',Helvetica] mb-8">
                Visit us at one of our global locations or schedule a virtual meeting.
              </p>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#00D4AA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPinIcon className="w-6 h-6 text-[#00D4AA]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-2">
                            {office.city}
                          </h3>
                          <p className="text-gray-600 font-['Figtree',Helvetica] mb-1">
                            {office.address}
                          </p>
                          <p className="text-gray-600 font-['Figtree',Helvetica] mb-2">
                            {office.zipcode}
                          </p>
                          <p className="text-[#00D4AA] font-['Figtree',Helvetica] font-semibold">
                            {office.phone}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Info */}
              <Card className="bg-[#00D4AA]/5 border border-[#00D4AA]/20 rounded-xl mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ClockIcon className="w-5 h-5 text-[#00D4AA]" />
                      <span className="font-['Figtree',Helvetica] text-gray-700">
                        Business Hours: Mon-Fri, 9AM-6PM EST
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="w-5 h-5 text-[#00D4AA]" />
                      <span className="font-['Figtree',Helvetica] text-gray-700">
                        Emergency Support: +1 (555) 999-0000
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MailIcon className="w-5 h-5 text-[#00D4AA]" />
                      <span className="font-['Figtree',Helvetica] text-gray-700">
                        General Inquiries: hello@jobportal.com
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-['Figtree',Helvetica] font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I create an account?",
                answer: "Click the 'Register' button in the top right corner and fill out the simple form. You'll be ready to start applying for jobs in minutes."
              },
              {
                question: "Is Job Portal free to use?",
                answer: "Yes! Job Portal is completely free for job seekers. You can search, apply, and manage your applications at no cost."
              },
              {
                question: "How do I apply for jobs?",
                answer: "Once you've created your profile, simply click 'Apply Now' on any job listing. You can track all your applications in your dashboard."
              },
              {
                question: "Can employers contact me directly?",
                answer: "Yes, if you make your profile visible to employers, they can reach out to you directly with relevant opportunities."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-['Figtree',Helvetica] font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 font-['Figtree',Helvetica]">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};