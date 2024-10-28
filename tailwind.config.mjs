/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
import { DARK_THEME, LIGHT_THEME } from "./src/utils/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [DARK_THEME, LIGHT_THEME],
  },
  plugins: [daisyui],
};
