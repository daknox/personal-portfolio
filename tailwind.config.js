/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-purple': '#8B5CF6',
        'light-purple': '#C4B5FD',
        'dark-purple': '#7C3AED'
      }
    },
  },
  plugins: [],
}
