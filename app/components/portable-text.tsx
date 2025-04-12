"use client";
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";


   const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold text-[#333333] mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold text-[#333333] mb-3">
          {children}
        </h2>
      ),
      normal: ({ children }) => (
        <p className="text-[21px] text-[#1E1E1E]">{children}</p>
      ),
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <Link
            href={value?.href ?? "#"}
            target={target}
            className="text-[#B76E79] hover:underline"
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
          >
            {children}
          </Link>
        );
      },
    },
  };

  export default components



