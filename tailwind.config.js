/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0991FF',
        secondary: '#0F0147',
        whiteShade: '#f0f0f0',
        blackShade: '#232323',
        shadeOne: '#E6F4F1',
        shadeTwo: '#0057BB'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
      spacing: {
        sm: '20px',
        md: '40px',
        lg: '80px',
        xl: '100px',
      }
    },
  },
  plugins: [],
}

