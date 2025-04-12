"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import getBlogs from "@/sanity/sanity-utils";
import { Blog } from "@/types/project";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-[#333333] mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-[#333333] mb-3">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="text-[21px] text-[#1E1E1E]">{children}</p>
    ),
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
          className="text-[#B76E79] hover:underline"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      );
    },
  },
};

function BlogsPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
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
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
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
                <PortableText value={blog.content} components={components} />
                <Button className="bg-[#FFB6C1] px-6 py-2 text-base text-[#333333] font-normal rounded-[4px]">Read more</Button>
              </div>
              <div>
                {blog.image && (
                  <Image
                    width={600}
                    height={702}
                    src={blog.image}
                    alt={blog.name}
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
