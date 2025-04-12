import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
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
    <nav className="mx-6 ">
      <div className="flex justify-between items-center w-full max-w-[1400px] mx-auto py-6 border-b border-[#333333] text-sm">
        <div className="space-x-6">
          {navItems.map((item, index) => (
            <Link className="text-[#333333]" key={index} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <Image src={Logo} alt="beauty blog logo" width={38} height={46} />
        </div>
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
