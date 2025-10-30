import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandRose: "#CD8B76",
        brandBlue: "#95B8D1",
        brandSlate: "#4D5061",
      },
    },
  },
  plugins: [],
} satisfies Config;
