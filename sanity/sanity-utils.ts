import { createClient } from "@sanity/client";
import groq from "groq";
import clientConfig from "./config/client-config";

export default function getFeaturedBlogs() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "featuredblogs"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    description,
    content
        }`
  );
}

export function getFeaturedBlog(slug: string) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "featuredblogs" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    description,
    content
        }`,
    { slug }
  );
}

export function getBlogsCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "categories"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset -> url,
    }`
  );
}

export function getTrendingTopics() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "trendingtopics"]{
    _id,
    _createdAt,
    name,
    author,
    time,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    description,
    content
        }`
  );
}

export function getTrendingTopic(slug: string) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "trendingtopics" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    description,
    content
        }`,
    { slug }
  );
}
