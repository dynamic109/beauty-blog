import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "9fkft4kj",
  dataset: "production",
  title: "Beauty Blog",
  apiVersion: "2025-04-07",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
});

export default config;
