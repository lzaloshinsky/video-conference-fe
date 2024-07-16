// @ts-check
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`${__dirname}/src/**/*.*sx`, `${__dirname}/src/**/*.ts`],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1281px",
      "2xl": "1537px",

      // breakpoints renamed for convenience
      mobileP: "300px",
      mobileL: "500px",
      tablet: "768px", // adding this so we don't need to specify tabletP. (tabletP is conceptually the same as plain tablet)
      tabletP: "768px",
      tabletL: "1024px",
      laptop: "1281px",
      desktop: "1537px",
      pwa: { raw: "(display-mode: standalone)" },
    },
    boxShadow: {
      DEFAULT:
        "0px 6px 40px 4px #EAECF48F, 0px 2px 16px 1px #D0D4E51A,0px 1px 0px 0px #EEEFF5",
      // it seems that adding the DEFAULT shadow removed all the existing tailwind shadows
      // I'm copying the non-default shadows from tailwind docs so I don't break the existing shadow-x stuff
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      large:
        "0px 1px 0px #EEEFF5, 0px 2px 16px 1px rgba(208, 212, 230, 0.1), 0px 6px 40px 4px rgba(234, 236, 244, 0.56)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
      borderRadius: {
        6: "6px",
      },
      maxHeight: {
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "80vh": "80vh",
        inherit: "inherit",
      },
      width: {
        105: "30rem",
      },
      height: {
        "80vh": "80vh",
        inherit: "inherit",
      },
      colors: {
        primary: {
          100: "#F5F5FA",
          200: "#ECEFFC",
          500: "#849DF5",
          600: "#224DE8",
          800: "#1D3CA9",
          900: "#0C163B",
        },
        neutral: {
          DEFAULT: "#FFFFFF",
          100: "#F6F7F9",
          200: "#EAECF0",
          300: "#D6D9E1",
          400: "#BEC4CF",
          500: "#9BA3B5",
          600: "#7A849C",
          700: "#50596D",
          800: "#393F4C",
          900: "#22252D",
        },
        warning: {
          200: "#FAECDB",
          900: "#DF830C",
        },
        success: {
          200: "#DBEEE0",
          900: "#0E9033",
        },
        danger: {
          200: "#F5DBDF",
          600: "#f52242",
          700: "#BD0F2A",
        },
        blue: {
          // changed from 600 to 650 for backward compatibility.
          // to be deleted after migrating to new UI, when `blue-650` is not used anymore
          650: "#224de8",
        },
        black: colors.black,
        white: colors.white,
        indigo: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          500: "#6366F1",
          600: "#224DE8",
          700: "#1D3CA9",
        },
        orange: {
          100: "#FFEDD5",
          400: "#FB923C",
          800: "#9A3412",
        },
        rose: colors.rose,
        gray: colors.gray,
        red: colors.red,
        lightPurple: {
          100: "#F5F5FA",
          200: "#F0F0FF",
          300: "#E6E7F8",
          400: "#CACCF6",
          500: "#4A4FCB",
          600: "#383C99",
        },
        darkPurple: {
          100: "#E8E6ED",
          200: "#9791A6",
          300: "#6D618B",
          400: "#150836",
        },
        secondaryBlue: {
          800: "#1E40AF",
          400: "#38BDF8",
          100: "#DBEAFE",
          50: "#EFF6FF",
        },

        secondaryGreen: {
          800: "#065F46",
          400: "#34D399",
          100: "#D1FAE5",
          50: "#ECFDF5",
        },

        secondaryIndigo: {
          800: "#3730A3",
          400: "#818CF8",
          100: "#E0E7FF",
          50: "#EEF2FF",
        },

        secondaryOrange: {
          800: "#9A3412",
          400: "#FB923C",
          100: "#FFEDD5",
          50: "#FFF7ED",
        },

        secondaryPink: {
          800: "#9D174D",
          400: "#F472B6",
          100: "#FCE7F3",
          50: "#FDF2F8",
        },

        secondaryPurple: {
          800: "#5B21B6",
          400: "#818CF8",
          100: "#EDE9FE",
          50: "#F5F3FF",
        },

        secondaryRed: {
          800: "#991B1B",
          400: "#F87171",
          100: "#FEE2E2",
          50: "#FEF2F2",
        },

        secondaryYellow: {
          800: "#92400E",
          400: "#FBBF24",
          100: "#FEF3C7",
          50: "#FFFBEB",
        },
      },
      keyframes: {
        "in-out-1": {
          "0%": {
            transform: "translateX(-140vw)",
          },
          "50%": {
            transform: "translateX(0vw)",
          },
          "100%": {
            transform: "translateX(100vw)",
          },
        },
        "in-out-2": {
          "0%": {
            transform: "translateX(-130vw)",
          },
          "50%": {
            transform: "translateX(0vw)",
          },
          "100%": {
            transform: "translateX(120vw)",
          },
        },
        "in-out-3": {
          "0%": {
            transform: "translateX(-120vw)",
          },
          "50%": {
            transform: "translateX(0vw)",
          },
          "100%": {
            transform: "translateX(130vw)",
          },
        },
        "in-out-4": {
          "0%": {
            transform: "translateX(-110vw)",
          },
          "50%": {
            transform: "translateX(0vw)",
          },
          "100%": {
            transform: "translateX(140vw)",
          },
        },
        "in-out-5": {
          "0%": {
            transform: "translateX(-100vw)",
          },
          "50%": {
            transform: "translateX(0vw)",
          },
          "100%": {
            transform: "translateX(150vw)",
          },
        },
        "slide-in": {
          "0%": { transform: "translateY(5px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
        shrink: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.2s ease-in-out",
        shrink: "shrink 0.7s ease-in-out ",
        "in-out-1": "in-out-1 4s ease-in-out infinite",
        "in-out-2": "in-out-2 4s ease-in-out infinite",
        "in-out-3": "in-out-3 4s ease-in-out infinite",
        "in-out-4": "in-out-4 4s ease-in-out infinite",
        "in-out-5": "in-out-5 4s ease-in-out infinite",
      },

      translate: {
        "4/2": "200%",
        "6/2": "300%",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["group-hover"],
      backgroundColor: ["disabled", "group-hover"],
      borderColor: ["disabled"],
      textColor: ["disabled"],
    },
  },
};
