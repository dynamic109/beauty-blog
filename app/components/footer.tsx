import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" max-w-[1400px] mx-auto pt-16">
      <div className="flex justify-between items-center border-t border-[#A0A0A0] py-6">
        <Image
          src={"/beauty-blog-logo.svg"}
          alt="beauty blog logo"
          width={38}
          height={46}
        />
        <div className="gap-3 flex items-center">
          <Image
            src={"/icon (4).svg"}
            alt="facebook logo"
            width={24}
            height={24}
          />
          <Image
            src={"/icon (2).svg"}
            alt="instagram logo"
            width={24}
            height={24}
          />
          <Image
            src={"/icon (3).svg"}
            alt="youtube logo"
            width={24}
            height={24}
          />
        </div>
        <div className="space-x-3">
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
