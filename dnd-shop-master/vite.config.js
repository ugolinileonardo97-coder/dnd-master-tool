import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      cleanupOutdatedCaches: true,
      injectRegister: "auto",

      includeAssets: ["favicon.svg", "icons.svg"],

      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globIgnores: [
          "data/**/*.json",
          "**/assets/*-cr-*.js",
          "**/assets/*-comune-*.js",
          "**/assets/*-non-comune-*.js",
          "**/assets/*-rara-*.js",
          "**/assets/*-molto-rara-*.js",
          "**/assets/*-leggendaria-*.js",
        ],
      },

      manifest: {
        name: "Master’s Grimoire",
        short_name: "Grimoire",
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
