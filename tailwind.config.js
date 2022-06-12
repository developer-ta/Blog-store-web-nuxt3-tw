const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',

    './contenet/**/*.{md,yml,json,csv,toml,yaml}',
    './app.vue',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.violet[600],
          ...colors.violet,
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        desktop: '100px',
        mobile: '100px',
      },

      animation: {
        fade: 'fade 0.4s ease-in-out ',
        slideDown: 'slideDown 1s ease-in-out ',
      },
      Keyframes: {
        fade: {
          '0%': { scale: 0, opacity: 0 },
          '100%': { scale: 1, opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY: (-70px)', opacity: 0 },
          '100%': { transform: 'translateY: (0px)', opacity: 1 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
