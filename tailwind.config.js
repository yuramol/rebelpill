/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    lineHeight: {
      1: '14px',
      2: '22px',
      3: '25px',
      4: '30px',
      5: '46px',
      6: '50px',
      7: '60px',
      8: '76px',
    },
    fontSize: {
      caption: '14px',
      sm: '16px',
      base: '20px',
      h5: '24px',
      h4: '32px',
      h3: '40px',
      h2: '48px',
      h1: '64px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1332px',
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
        },
        dark: {
          DEFAULT: 'var(--dark)',
        },
        white: {
          DEFAULT: 'var(--white)',
        },
        grey: {
          DEFAULT: 'var(--grey)',
        },
        lightGrey: {
          DEFAULT: 'var(--light-grey)',
        },
      },
      backgroundImage: {
        'primary-gradient':
          'conic-gradient(from 223.88deg at 34.51% 66.63%, #171719 -94.98deg, #181818 35.76deg, #FF5C00 69.45deg, #FF010E 79.73deg, #FC5B00 102.87deg, #FF5C00 242.1deg, #FF000D 251.42deg, #171719 265.02deg, #181818 395.76deg)',
        'secondary-gradient':
          'conic-gradient(from 217deg at 39.44% 50.14%, #FF5C00 69.44697797298431deg, #FF010E 79.72867369651794deg, #FC5B00 102.87469983100891deg, #FF5C00 242.10206508636475deg, #FF000D 251.4223551750183deg)',
        'stroke-gradient':
          'linear-gradient(0deg, #FF5C00 -9.68%, rgba(255, 92, 0, 0.00) 97.57%)',
        'hover-gradient':
          'linear-gradient(261deg, #FC5B00 31.68%, #FF010E 89.55%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
