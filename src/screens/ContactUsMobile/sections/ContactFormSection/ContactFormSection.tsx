import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactFormSection = (): JSX.Element => {
  // Contact information data
  const contactInfoItems = [
    {
      icon: <PhoneIcon className="w-10 h-10" />,
      title: "Call for inquiry",
      content: "+257 388-6895",
    },
    {
      icon: <MailIcon className="w-10 h-10" />,
      title: "Send us email",
      content: "kramulous@sbcglobal.net",
    },
    {
      icon: <ClockIcon className="w-10 h-10" />,
      title: "Opening hours",
      content: "Mon - Fri: 10AM - 10PM",
    },
    {
      icon: <MapPinIcon className="w-10 h-10" />,
      title: "Office",
      content: "19 North Road Piscataway, NY 08854",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-10 px-5 py-10 w-full">
      <div className="flex flex-col items-start gap-[60px] w-full">
        {/* Header section */}
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="w-full mt-[-1.00px] font-['Figtree',Helvetica] font-bold text-black text-[28px] text-center tracking-[0] leading-[normal]">
              You Will Grow, You Will Succeed. We Promise That
            </h2>
          </div>

          <p className="w-full font-['Figtree',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6">
            Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
            lectus tincidunt tincidunt ultrices. Diam convallis morbi
            pellentesque adipiscing
          </p>
        </div>

        {/* Contact information blocks */}
        <div className="flex flex-col items-start gap-10 w-full">
          {contactInfoItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 w-full"
            >
              {item.icon}
              <h3 className="font-['Figtree',Helvetica] font-bold text-black text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
                {item.title}
              </h3>
              <p className="font-['Figtree',Helvetica] font-medium text-black text-xl text-center tracking-[0] leading-6 whitespace-nowrap">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form card */}
      <Card className="w-full bg-[#ebf5f4] rounded-[20px] border-none">
        <CardContent className="flex flex-col items-center gap-10 px-5 py-10">
          <div className="flex flex-col items-center gap-5">
            <h2 className="mt-[-1.00px] text-black text-[28px] font-['Figtree',Helvetica] font-bold tracking-[0] leading-[normal]">
              Contact Info
            </h2>
            <p className="w-[323px] h-[23px] font-['Figtree',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Nibh dis faucibus proin lacus tristique
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <label className="font-['Figtree',Helvetica] font-semibold text-black text-base tracking-[0] leading-5 whitespace-nowrap">
                  First Name
                </label>
                <Input
                  className="bg-defaultwhite rounded-md px-4 py-[9px] font-['Figtree',Helvetica] text-gray-600"
                  placeholder="Placeholder"
                />
              </div>

              <div className="flex flex-col items-start gap-1.5 w-full">
                <label className="font-['Figtree',Helvetica] font-semibold text-black text-base tracking-[0] leading-5 whitespace-nowrap">
                  Last Name
                </label>
                <Input
                  className="bg-defaultwhite rounded-md px-4 py-[9px] font-['Figtree',Helvetica] text-gray-600"
                  placeholder="Placeholder"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-1.5 w-full">
              <label className="font-['Figtree',Helvetica] font-semibold text-black text-base tracking-[0] leading-5 whitespace-nowrap">
                Email Address
              </label>
              <Input
                className="bg-defaultwhite rounded-md px-4 py-[9px] font-['Figtree',Helvetica] text-gray-600"
                placeholder="Placeholder"
              />
            </div>

            <div className="flex flex-col items-start gap-10 w-full">
              <div className="flex flex-col h-[178px] items-start gap-1.5 w-full">
                <label className="font-['Figtree',Helvetica] font-medium text-black text-base tracking-[0] leading-5 whitespace-nowrap">
                  Message
                </label>
                <Textarea
                  className="flex-1 bg-defaultwhite rounded-md px-4 py-[9px] font-['Figtree',Helvetica] text-gray-600 h-full"
                  placeholder="Placeholder"
                />
              </div>

              <Button className="h-10 w-full bg-[#309589] rounded-lg font-['Figtree',Helvetica] font-semibold text-white text-base">
                Send Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
