import BlogCategories from "../components/blog-categories";
import Hero from "../components/hero";
import TrendingTopics from "../components/trending-topics";

const page = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Hero />
      <BlogCategories />
      <TrendingTopics />
    </div>
  );
};

export default page;
