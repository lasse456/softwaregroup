import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        mainshadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px;",
      },

      colors: {
        main: "#051D40",
        second: "#666666",
        navlink: "#00000099",
        back: "#f5f5f5",
      },

      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        new: { max: "800px" },
        top: { max: "600px" },
        features: { max: "970px" },
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        features: "30% 1fr",
      },
    },
    backgroundImage: {
      herobg: "url('../public/herobg.jpg')",
    },
  },
  plugins: [],
};
export default config;
