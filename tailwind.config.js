module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    darkMode: 'class',

    screens: {
      sm: '640px',

      md: '768px',

      lg: '1440px',
    },

    fontFamily: {
      sans: 'Nunito Sans, sans-serif',
    },

    fontWeight: {
      light: 300,
      normal: 600,
      bold: 800,
    },

    fontSize: {
      sm: '12px',
      hm: '14px',
      dt: '16px',
      countryXL: '18px',
      countryXXL: '32px',
      title: '24px',
    },

    extend: {
      colors: {
        blue: {
          dk: 'hsl(209, 23%, 22%)',
          'dk-mode': 'hsl(207, 26%, 17%)',
          'lt-mode-text': 'hsl(200, 15%, 8%)',
        },

        gray: {
          'lt-mode': 'hsl(0, 0%, 98%)',
          'lt-mode-input': 'hsl(0, 0%, 52%)',
          150: '#848484',
        },
        width: {
          'country-flag': '35rem',
        },

        height: {
          'country-flag': '25rem',
        },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
