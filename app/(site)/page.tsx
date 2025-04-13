import BlogCategories from "../components/blog-categories";
import Hero from "../components/hero";

const page = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Hero />
      <BlogCategories />
    </div>
  );
};

export default page;
