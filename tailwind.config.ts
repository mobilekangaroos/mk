import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        'mk-green-50': '#f2ffd4',
        'mk-green-100': '#dce8a2',
        'mk-green-200': '#c7dc65',
        'mk-green-300': '#b3d122',
        'mk-green-400': '#8cc149',
        'mk-green-500': '#91c03e',
        'mk-green-600': '#67b532',
        'mk-green-700': '#509824',
        'mk-green-800': '#3c7718',
        'mk-green-900': '#2a590d',
      },
    },
  },
  plugins: [],
};
export default config;
