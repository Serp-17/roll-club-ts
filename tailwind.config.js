module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts/,jsx,tsx}',
    './src/features/**/*.{js,ts,tsx,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      danger: '#E71E0D',
      primary: '#27B799',
      primaryLight: '#27B79980',
      file: '#E8EEF1',
      payment: '#6C7886',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      card: '#1E2749',
    }),
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      gridTemplateColumns: {
        layout: 'minmax(150px, 25%) 1fr;',
      },
      zIndex: {
        '100': '100',
      },
      borderWidth: {
        3: '3px',
      },
      fill: {
        primary: '#27B799',
        'primary-dark': '#1B8F88',
      },
      colors: {
        primary: '#27B799',
        'primary-dark': '#1B8F88',
        dark: '#1E2749',
        lightgrey: '#F9FCFF',
        grey: '#ADB0BA',
        brown: '#685E5E',
        red: '#E71E0D',
        method: '#232427',
      },
      height: {
        70: '4.375rem',
      },
      width: {
        47: '11.625rem',
        49: '12.25rem',
        205: '12.8125rem',
        216: '13.5rem',
        300: '18.75rem',
        420: '26.25rem',
      },
      maxWidth: {
        420: '420px',
        1065: '66rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      fontWeight: ['hover', 'focus', 'active'],
      borderWidth: ['hover', 'focus', 'active'],
      fill: ['hover', 'focus'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
