"use client";
import { getTrendingTopics } from "@/sanity/sanity-utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Trending } from "@/types/project";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import components from "./portable-text";
import createComponents from "./portable-text";

const TrendingTopics = () => {
  const [trendingTopics, setTrendingTopics] = useState<Trending[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const data = await getTrendingTopics();
        setTrendingTopics(data);
      } catch {
        console.log("error fetching trending topics");
      }
    };

    fetchTopics();
  });

  const customComponents = createComponents({
    paragraphClassName: "text-[16px] text-gray-800 leading-relaxed",
  });

  return (
    <div className="border-t border-[#A0A0A0] py-[45px]">
      <div className="flex flex-col lg:flex-row items-end justify-between ">
        <div className="max-w-[511px] w-full space-y-4">
          <h3 className="text-[#B76E79] font-semibold">TRENDING TOPICS</h3>
          <h3 className="font-semibold text-[48px] text-[#333333] leading-14">
            Stay Trendy with Our Latest Insights
          </h3>
        </div>
        <Link
          href={`#`}
          className="border border-[#A0A0A0] px-6 py-2 text-base text-[#333333] font-normal rounded-[4px] flex place-items-center-safe w-fit"
        >
          See More
        </Link>
      </div>
      <div className="mt-15 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {trendingTopics.map((trend, index) => (
          <div
            key={index}
            className=" w-full h-full border border-[#A0A0A0] p-2 rounded-[4px] cursor-pointer hover:scale-[1.01] transition-transform duration-300 ease-in-out"
          >
            <Image
              src={trend.image}
              alt={trend.name}
              width={1000}
              height={1000}
            />
            <div className="p-2 space-y-4">
              <h3 className="text-[24px] font-normal leading-7">
                {trend.name}
              </h3>
              <PortableText
                value={trend.description}
                components={customComponents}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
