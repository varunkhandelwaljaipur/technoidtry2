import type { Config } from "tailwindcss";

const config: Config = {
  // THIS IS THE PART THAT WAS MISSING OR EMPTY:
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}" 
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#e0e0e0",
        "neon-cyan": "#00f3ff",
        "neon-pink": "#ff00ff",
        "neon-yellow": "#ffee00",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        rajdhani: ["var(--font-rajdhani)"],
      },
      backgroundImage: {
        "scanlines": "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
      },
    },
  },
  plugins: [],
};
export default config;
