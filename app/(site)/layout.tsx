import React from "react";
import Nav from "../components/nav";

const links = [
  { name: "Featured", href: "featured" },
  { name: "How-to", href: "/how-to" },
  { name: "Expert Advice", href: "/expert-advice" },
];

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#EAEAEA] min-h-screen px-4 lg:px-6">
      <Nav navItems={links} />
      {children}
    </main>
  );
};

export default layout;
