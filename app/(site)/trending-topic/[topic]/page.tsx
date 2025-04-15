import TrendingTopic from "@/app/components/trending-topic";
import TrendingTopics from "@/app/components/trending-topics";
import { getTrendingTopic } from "@/sanity/sanity-utils";
import React from "react";

type Props = {
  params: { topic: string };
};

const page = async ({ params }: Props) => {
  const slug = params.topic;
  const topic = await getTrendingTopic(slug);
  return (
    <div className="max-w-[1400px] mx-auto ">
      <TrendingTopic topicData={topic} />
      <TrendingTopics />
    </div>
  );
};

export default page;
