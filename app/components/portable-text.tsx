"use client";
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";

interface TextStyles {
  h1ClassName?: string;
  h2ClassName?: string;
  paragraphClassName?: string;
  linkClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
}

const createComponents = ({
  h1ClassName = "text-3xl font-bold text-[#333333] mb-4",
  h2ClassName = "text-2xl font-semibold text-[#333333] mb-3",
  paragraphClassName = "text-[21px] text-[#1E1E1E]",
  linkClassName = "text-[#B76E79] hover:underline",
  listClassName = "list-disc list-inside space-y-2 mb-4",
  listItemClassName = "text-[21px] text-[#1E1E1E]",
}: TextStyles = {}): PortableTextComponents => ({
  block: {
    h1: ({ children }) => <h1 className={h1ClassName}>{children}</h1>,
    h2: ({ children }) => <h2 className={h2ClassName}>{children}</h2>,
    normal: ({ children }) => <p className={paragraphClassName}>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className={listClassName}>{children}</ul>,
    number: ({ children }) => (
      <ol className={`${listClassName} list-decimal`}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className={listItemClassName}>{children}</li>,
    number: ({ children }) => <li className={listItemClassName}>{children}</li>,
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
          className={linkClassName}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      );
    },
  },
});

export default createComponents;
