"use client";

import config from "@/sanity.config";
import { Studio } from "sanity";

export default function AdminPage() {
  return <Studio config={config} />;
}
