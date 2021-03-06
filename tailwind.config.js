// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    // backgroundColor: theme => ({
    //   'primary': '#3490dc',
    //   'secondary': '#ffed4a',
    //   'danger': '#e3342f',
    // }),
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },

    extend: {
      colors: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  // plugins: [
  //   plugin(function({ addBase, config }) {
  //     addBase({
  //       'h1': { fontSize: config('theme.fontSize.2xl') },
  //       'h2': { fontSize: config('theme.fontSize.xl') },
  //       'h3': { fontSize: config('theme.fontSize.2xl') },
  //     })
  //   })
  // ]
}
