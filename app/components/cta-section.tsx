import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const CTASection = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between border border-[#A0A0A0] p-3 rounded-[4px]">
      <div className="lg:max-w-[455px] w-full mx-auto space-y-4 text-[#333333]">
        <h3 className="text-[#B76E79] font-semibold">SUBSCRIPTION</h3>
        <h2 className="font-semibold text-[48px] leading-12">
          Join our exclusive beauty community
        </h2>
        <p>
          Elevate your beauty journey with personalized recommendations and stay
          connected with a community that shares your passion for self-care.
          Subscribe now and embark on a beauty adventure with us!"
        </p>
        <div className="flex items-center border border-[#A0A0A0] rounded-md py-1 px-1 w-full max-w-md">
          <Input
            type="text"
            placeholder="Email Addresss"
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button type="submit" className="ml-2 bg-[#FFB6C1] text-[#333333] text-base">
            Subscribe
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={"/cta-image.svg"}
          alt="ladies with our products"
          width={604}
          height={529}
          className="w-full h-full lg:max-w-[604px] lg:mx-w-[529px]"
        />
      </div>
    </div>
  );
};

export default CTASection;
