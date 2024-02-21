/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { ubuntu: ["Ubuntu", "sans-serif"] },
      colors: {
        // Primary Colors
        MarineBlue: "hsl(213, 96%, 18%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
        PastelBlue: "hsl(228, 100%, 84%)",
        LightBlue: "hsl(206, 94%, 87%)",
        StrawberryRed: "hsl(354, 84%, 57%)",
        // Neutral Colors
        CoolGray: "hsl(231, 11%, 63%)",
        LightGray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        mobileBackgroundIndexContainer:
          "url('/src/assets/images/bg-sidebar-mobile.svg')",
        desktopBackgroundIndexContainer:
          "url('/src/assets/images/bg-sidebar-desktop.svg')",
        checked: "url('/src/assets/images/icon-checkmark.svg')",
      },
      boxShadow: {
        trial: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};
