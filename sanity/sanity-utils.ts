import { createClient } from "@sanity/client";
import groq from "groq";

export default function getBlogs() {
  const client = createClient({
    projectId: "9fkft4kj",
    dataset: "production",
    apiVersion: "2025-04-07",
  });

  return client.fetch(
    groq`*[_type == "blog"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
        }`
  );
}
