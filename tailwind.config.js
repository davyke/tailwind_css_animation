/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation:{
        spin : 'spin 5s linear infinite',
        wiggle: 'wiggle 20s ease-in-out',
        // beat: 'beat 1s ease-in-out infinite',
        banner:'banner 10s ease-in-out'
      },
      keyframes:{
        wiggle:{
           '0%': { transform: 'scale(1.6)' },
          '100%': { transform: 'scale(1)' },
        },
        banner:{
          '0%':{
            trasform:'translateY(-40px) rotateY(-20deg)',
            opacity:0
          },
          '100%':{
            transform:'translateY(0) rotateY(0)',
            opacity:1
          },
        }
      },
      fontfamily:{
        body:['Poppins']
      },
      screens: {
        'xxs': '200px', // min-width
      },
    },
  },
  plugins: [require('@kamona/tailwindcss-perspective'),],
}
