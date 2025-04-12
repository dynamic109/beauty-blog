"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import getFeaturedBlogs from "@/sanity/sanity-utils";
import { Blog } from "@/types/project";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import components from "./portable-text";

function BlogsPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getFeaturedBlogs();
        setBlogs(data);
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
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog._id}>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6">
              <div className="space-y-6 max-w-[604px] w-full h-full">
                <div className="flex gap-4 items-center mb-12">
                  <div className="swiper-button-prev-custom cursor-pointer">
                    <Image
                      src="/arrow-02.svg"
                      alt="Previous"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="swiper-button-next-custom cursor-pointer">
                    <Image
                      src="/arrow-01.svg"
                      alt="Next"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <h3 className="text-[#B76E79] font-semibold">FEATURED</h3>
                <h3 className=" text-[64px] font-semibold text-[#333333] leading-20">
                  {blog.name}
                </h3>
                <PortableText
                  value={blog.description}
                  components={components}
                />
                <Link
                  href={`/FeaturedBlogs/${blog.slug}`}
                  className="bg-[#FFB6C1] px-6 py-2 text-base text-[#333333] font-normal rounded-[4px]"
                >
                  Read more
                </Link>
              </div>
              <div>
                {blog.image && (
                  <Image
                    width={600}
                    height={702}
                    src={blog.image}
                    alt={blog.name}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BlogsPreview;
