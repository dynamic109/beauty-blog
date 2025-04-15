"use client";
import { Blog } from "@/types/project";
import React from "react";
import { PortableText } from "@portabletext/react";
import components from "./portable-text";
import Image from "next/image";

const FeaturedBlog = ({ blogData }: any) => {
  if (!blogData) {
    return <div>Loading...</div>;
  }

  const customComponents = components({});

  return (
    <div>
      <div className="text-center max-w-[826px] w-full mx-auto space-y-8">
        <h3 className="text-[#B76E79] font-semibold">FEATURED</h3>
        <h3 className=" text-[64px] font-semibold text-[#333333] leading-20">
          {blogData.name}
        </h3>
        <PortableText
          value={blogData.description}
          components={customComponents}
        />
      </div>
      <div className="flex justify-center items-center mt-12 h-fit">
        <Image
          src={blogData.image}
          alt={blogData.name}
          width={1248}
          height={640}
          className="object-cover max-w-[1248px] max-h-[640px] w-full h-full"
        />
      </div>
      
    </div>
  );
};

export default FeaturedBlog;
