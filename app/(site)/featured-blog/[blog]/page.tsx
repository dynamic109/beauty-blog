import FeaturedBlog from "@/app/components/featured-blog";
import { getFeaturedBlog } from "@/sanity/sanity-utils";

type Props = {
  params: { blog: string };
};

const page = async ({ params }: Props) => {
  const slug = params.blog;
  const blog = await getFeaturedBlog(slug);
  return (
    <div className="max-w-[1400px] mx-auto py-6">
      <FeaturedBlog blogData={blog} />
    </div>
  );
};

export default page;
