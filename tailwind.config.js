module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/hero-bg.png)",
      },
      backgroundColor: {
        brand: {
          light: "#61DAFB",
          DEFAULT: "#05B6E6",
          dark: "#034D63",
        },
      },
      textColor: {
        brand: {
          light: "#61DAFB",
          DEFAULT: "#05B6E6",
          dark: "#034D63",
        },
        social: {
          github: "#171515",
          twitter: "#1DA1F2",
          linkedin: "#05B6E6",
        },
      },
      fontSize: {
        h1: ["6.85375rem", "1em"], // 19.66
        h3: ["4.235625rem", "6.9375rem"], // 67.77
        h4: ["1.618125rem", "2.95625rem"], // 25.89
        seaction: ["4.235625rem", "4.635625rem"], // 67.77
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
