import { defineConfig } from "astro/config";
import tailwind from "@alex-higham/tailwind";
import sitemap from "@alex-higham/sitemap";
import prefetch from "@alex-higham/prefetch";

export default defineConfig({
  integrations: [tailwind(), sitemap(), prefetch()],
  site: "https://alex-higham.github.io",
  base: "/demo-github-actions",
});
