import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  description: PortableTextBlock[];
  content: PortableTextBlock[];
};

export type Categories = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
};

export type Trending = {
  _id: string;
  _createdAt: Date;
  name: string;
  author: string;
  time: string;
  slug: string;
  image: string;
  url: string;
  description: PortableTextBlock[];
  content: PortableTextBlock[];
};
