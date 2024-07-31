/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'super-light': '#EAC8FE',
        'medium': '#9747FF',
        'light-main': '#3E004E',
        'main': '#220629',
        'bright': '#FF5C00'
      },
      fontFamily: {
        'logo': ['"Caesar Dressing"', 'sans-serif'],
        'title': ['"Abhaya Libre"'],
        'help': ['"Yeseva One"'],
        'sans': ['"Tenor sans"', 'sans-serif'],
        'serif': ['Lora']
      },
    },
  },
  plugins: [],
};
