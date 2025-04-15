"use client";
import { PortableText } from "@portabletext/react";
import components from "./portable-text";
import Image from "next/image";

const TrendingTopic = ({ topicData }: any) => {
  const customComponents = components({});

  return (
    <div className="max-w-[1400px] mx-auto py-6">
      <div className="text-center max-w-[826px] w-full mx-auto space-y-6">
        <h3 className="text-[#B76E79] font-semibold">FEATURED</h3>
        <h3 className="text-[64px] font-semibold leading-18">
          {topicData.name}
        </h3>
        <PortableText
          value={topicData.description}
          components={customComponents}
        />
      </div>
      <div className="flex justify-center items-center mt-12 h-fit">
        <Image
          src={topicData.image}
          alt={topicData.name}
          width={1248}
          height={640}
          className="object-cover max-w-[1400px] max-h-[640px] w-full h-full"
        />
      </div>
      <div className="max-w-[826px] w-full mx-auto py-12">
        <PortableText value={topicData.content} components={customComponents} />
      </div>
    </div>
  );
};

export default TrendingTopic;
