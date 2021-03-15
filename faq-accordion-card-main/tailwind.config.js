module.exports = {
  purge: {
    enabled: false,
    content: ['index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          darker: 'var(--primary-darker)',
          hover: 'var(--primary-hover)'
        },
        neutral: {
          darker: 'var(--neutral-darker)',
          DEFAULT: 'var(--neutral)'
        },
        divider: 'var(--divider)',
        soft: {
          violet: 'var(--soft-violet)',
          blue: 'var(--soft-blue)'
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
