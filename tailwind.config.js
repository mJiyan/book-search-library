module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '340px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: '.48rem',
      sm: '.675rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      DarkBlue: '#2b3945',
      VeryDarkBlue: '#202c37',
      VeryDarkBlueLight: '#111517',
      DarkGray: '#858585',
      LightGray: "#C0C0C0",
      VeryLightGray: '#fafafa',
      WhiteDark: '#ffffff',
      LightWhite: '#E8E8E8',
      LightRedError: "#FFA07A",
      RedError: "#FF4500",
      DarkRedError: "#8B0000",
    },
    fontFamily: {
      nunito: ['Nunito', 'nunito-sans'],
    },
    fontWeight: {
      light: 300,
      normal: 600,
      bold: 800,
    },
  },
  variants: { extend: {} },
  plugins: [],
};
