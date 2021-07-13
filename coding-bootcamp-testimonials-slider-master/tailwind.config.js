module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(240, 38%, 20%)',
          lighter: 'hsl(240, 18%, 77%)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
