/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
import { DARK_THEME, LIGHT_THEME } from "./src/utils/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.6",
            transform: "scale(0.95)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out both",
        "pulse-glow": "pulse-glow 14s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 20px 45px -20px rgba(14, 165, 233, 0.45)",
      },
    },
  },
  daisyui: {
    themes: [DARK_THEME, LIGHT_THEME],
  },
  plugins: [daisyui],
};
