import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/beauty-blog-logo.svg";

interface LinksProps {
  name: string;
  href: string;
}

interface NavProps {
  navItems: LinksProps[];
}

const Nav = ({ navItems }: NavProps) => {
  return (
    <nav className="">
      <div className="flex justify-between items-center w-full max-w-[1400px] mx-auto py-6 border-b border-[#A0A0A0] text-sm">
        <div className="space-x-6">
          {navItems.map((item, index) => (
            <Link className="text-[#333333]" key={index} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <Link href={"/"}>
          <Image src={Logo} alt="beauty blog logo" width={38} height={46} />
        </Link>
        <div>
          <Button variant={"ghost"} className="text-sm font-normal">
            Contact
          </Button>
          <Button
            variant={"ghost"}
            className="border border-[#B3B3B3] text-sm font-normal"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
