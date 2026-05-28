import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.svg", "icons.svg"],

      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },

      manifest: {
        name: "D&D Shop Master",
        short_name: "D&D Shop",
        description: "Strumento fantasy per Dungeon Master",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#070504",
        theme_color: "#070504",
        icons: [
          {
            src: "/icons.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/icons.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});