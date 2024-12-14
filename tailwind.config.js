/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',"./src/**/*.{js,jsx,tsx}", './node_modules/@shadcn/ui/dist/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        netflixRed: '#E50914', // Add Netflix red
      },
    },
  },
  plugins: [],
}

