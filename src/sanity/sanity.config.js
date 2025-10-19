import { defineConfig } from "sanity"
import { schemaTypes } from "./schemas"
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision"

export const config = defineConfig({
  projectId: "geort75z",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool(), visionTool()
  ],
  schema: {
    types: schemaTypes
  }
});

