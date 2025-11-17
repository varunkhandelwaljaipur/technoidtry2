import type { Config } from "tailwindcss";

const config: Config = {
  // This is the part that Vercel was failing to read
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#00f3ff",
        "neon-pink": "#ff00ff",
        "neon-yellow": "#ffee00",
        "cyber-black": "#050505",
        "cyber-gray": "#0a0a0a",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        rajdhani: ["var(--font-rajdhani)"],
      },
    },
  },
  plugins: [],
};
export default config;
