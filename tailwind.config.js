/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      smContactForm: '625px',
      mdContactForm: '1100px',
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
      caption:
        'clamp(0.75rem, calc(0.75rem + (0.875 - 0.75) * ((100vw - 20rem) / (81 - 20))), 0.875rem)',
      sm: '16px',
      base: '20px',
      h5: 'clamp(1.25rem, calc(1.25rem + (1.5 - 1.25) * ((100vw - 20rem) / (81 - 20))), 1.5rem)',
      h4: 'clamp(1.75rem, calc(1.75rem + (2 - 1.75) * ((100vw - 20rem) / (81 - 20))), 2rem)',
      h3: 'clamp(2rem, calc(2rem + (2.5 - 2) * ((100vw - 20rem) / (81 - 20))), 2.5rem)',
      h2: 'clamp(2rem, calc(2rem + (3 - 2) * ((100vw - 20rem) / (81 - 20))), 3rem)',
      h1: 'clamp(2.125rem, calc(2.125rem + (4 - 2.125) * ((100vw - 20rem) / (81 - 20))), 4rem)',
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
        darkSecondary: {
          DEFAULT: 'var(--dark-secondary)',
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
        'primary-gradient-mirror':
          'conic-gradient(from 215.39deg at 17.01% 79.56%, #171719 -94.98deg, #181818 35.76deg, #FF5C00 69.45deg, #FF010E 79.73deg, #FC5B00 102.87deg, #FF5C00 242.1deg, #FF000D 251.42deg, #171719 265.02deg, #181818 395.76deg)',
        'secondary-gradient':
          'conic-gradient(from 217deg at 39.44% 50.14%, #FF5C00 69.44697797298431deg, #FF010E 79.72867369651794deg, #FC5B00 102.87469983100891deg, #FF5C00 242.10206508636475deg, #FF000D 251.4223551750183deg)',
        'stroke-gradient':
          'linear-gradient(0deg, #FF5C00 -9.68%, rgba(255, 92, 0, 0.00) 97.57%)',
        'hover-gradient':
          'linear-gradient(261deg, #FC5B00 31.68%, #FF010E 89.55%)',
        'step-gradient':
          'linear-gradient(180deg, #0C0C0C 0%, rgba(12, 12, 12, 0.00) 100%)',
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
