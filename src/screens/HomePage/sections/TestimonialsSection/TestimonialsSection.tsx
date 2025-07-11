import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { StarIcon } from "lucide-react";

export const TestimonialsSection = (): JSX.Element => {
  // Figma-based testimonials (update these values/texts as per Figma if needed)
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "CareerLink helped me land my dream job at Google. The platform's smart matching system connected me with opportunities I never would have found otherwise.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director at Spotify",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The quality of job postings on CareerLink is exceptional. I found multiple opportunities that matched my skills and career goals perfectly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Airbnb",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "From application to offer, the entire process was smooth and professional. CareerLink truly cares about connecting the right people with the right opportunities.",
      rating: 5
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-24 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-['Figtree',Helvetica] text-[#181A1B] text-center md:text-left w-full md:w-auto">
            What Our <span className="text-[#00D4AA]">Users Say</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl text-center md:text-left mx-auto md:mx-0 font-['Figtree',Helvetica]">
            Hear from professionals who found their dream careers through our platform.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full justify-between">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed font-['Figtree',Helvetica] italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-['Figtree',Helvetica] font-bold text-[#181A1B] text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 font-['Figtree',Helvetica]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};