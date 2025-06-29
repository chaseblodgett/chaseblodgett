/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-left': { 
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },  
        },
        'slide-in-right': { 
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0)' },  
        },
        'slide-up': { 
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0)' },  
        },
        fadeIn: {
          '0%': { opacity: 0 },
          // '25%': { opacity: 0.25 },
          // '50%': { opacity: 0.5 },
          // '75%': { opacity: 0.75 },
          '100%': { opacity: 1 },
        },
      },
      animation: { 
        'slide-in-left': 'slide-in-left 1s ease-in-out', 
        'slide-in-right': 'slide-in-right 1s ease-in-out', 
        'slide-up': 'slide-up 1s ease-in-out', 
        'fade-in': 'fadeIn 3s ease-in-out forward', 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}


