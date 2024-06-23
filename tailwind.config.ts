import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
    },
    fontFamily: {
      poppins: 'var(--font-poppins)',
    },
    backgroundImage: {
      hero: 'url(assets/img/banner.jpg)',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#333333',
          100: '#484848',
          200: '#121212',
          300: '#111111',
        },
        accent: '#EFC40F',
      }
    },
  },
  plugins: [],
};
export default config;
