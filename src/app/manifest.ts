import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "https://raw.githubusercontent.com/nitinprajwal/portfolio/refs/heads/main/images/logo.png",
        type: "image/png",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "https://raw.githubusercontent.com/nitinprajwal/portfolio/refs/heads/main/images/logo.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "https://raw.githubusercontent.com/nitinprajwal/portfolio/refs/heads/main/images/logo.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "https://raw.githubusercontent.com/nitinprajwal/portfolio/refs/heads/main/images/logo.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/nitinprajwal/portfolio/refs/heads/main/images/mobile-dark.png",
        type: "image/png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://raw.githubusercontent.com/nitinprajwal/portfolio/refs/heads/main/images/mobile-light.png",
        type: "image/png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://raw.githubusercontent.com/nitinprajwal/portfolio/refs/heads/main/images/desktop-dark.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "https://raw.githubusercontent.com/nitinprajwal/portfolio/refs/heads/main/images/desktop-light.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
