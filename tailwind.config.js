/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': "url('/src/assets/images/bg-image-main.png')"
      }
    },
    colors: {
      white: {
        900: '#fff'
      },
      green: {
        400: '#596F78'
      },
      blue: {
        200: '#7BB8F1',
        400: '#17344F'
      },
      pink: {
        400: '#F7BDCC',
        500: '#F5B4BB'
      }
    }
  },
  plugins: []
}
