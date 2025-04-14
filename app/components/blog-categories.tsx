"use client";
import React, { useEffect, useState } from "react";
import { getBlogsCategories } from "@/sanity/sanity-utils";
import { Categories } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

const BlogCategories = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogsCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex border-t border-[#A0A0A0] py-[45px]">
      <div className="space-y-6 max-w-[604px] w-full h-full pt-12">
        <div className="flex gap-4 items-center mb-12">
          <div className="">
            <Image src="/arrow-02.svg" alt="Previous" width={40} height={40} />
          </div>
          <div className="">
            <Image src="/arrow-01.svg" alt="Next" width={40} height={40} />
          </div>
        </div>
        <div className="max-w-[245px] space-y-4 lg:mt-40">
          <h3 className="text-[#B76E79] font-semibold">CATEGORIES</h3>
          <h3 className="font-semibold text-[48px] text-[#333333] leading-14">
            Dive into Beauty{" "}
          </h3>
          <Link
            href={`#`}
            className="border border-[#A0A0A0] px-6 py-2 text-base text-[#333333] font-normal rounded-[4px] flex place-items-center-safe w-fit"
          >
            See More
          </Link>
        </div>
      </div>
      <div className="flex gap-6 py-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-[#A0A0A0] rounded-[4px] p-2"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={287}
              height={416}
            />
            <div className="flex items-center justify-between">
              <h3 className="text-[24px] text-[#333333] font-norma py-4 px-2">
                {category.name}
              </h3>
              <Image src={"/arrow-01.svg"} alt="arrow" width={20} height={7} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
