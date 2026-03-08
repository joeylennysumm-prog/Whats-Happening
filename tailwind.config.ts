import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0a0b",
        panel: "#15161a",
        accent: "#22c55e"
      }
    }
  },
  plugins: []
} satisfies Config;
