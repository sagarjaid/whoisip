/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      s: "0px",
      // => @media (min-width: 375px) { ... }

      xs: "375px",
      // => @media (min-width: 375px) { ... }

      sd: "480px",
      // => @media (min-width: 480px) { ... }

      sdm: "575px",
      // => @media (min-width: 575px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mdx: "868px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
