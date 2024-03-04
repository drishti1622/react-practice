//install tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

//change content in tailwind.config.js file
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]

//in index.js file
@import 'tailwindcss/base';     
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
