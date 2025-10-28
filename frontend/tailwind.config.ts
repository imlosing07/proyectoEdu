import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      letterSpacing: {
        'readable': '0.1em', // 10% spacing
      },
    },
  },
  plugins: [],
};

export default config;