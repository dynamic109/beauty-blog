import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "9fkft4kj",
  dataset: "production",
  title: "Beauty Blog",
  apiVersion: "2025-04-07",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {types: [...schemas]}
});

export default config;
