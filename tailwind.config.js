const defaultTheme = require('tailwindcss/defaultTheme')
const { isEnvProduction } = require('./plugins/utils.js')

const fontFamily = {
  sans: ['Lato', ...defaultTheme.fontFamily.sans]
}

module.exports = {
  purge: {
    //mode: 'jit',
    enabled: isEnvProduction(),
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: [
      ],
      whitelistPatternsChildren: [
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
