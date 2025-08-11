// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        primaryBg: "#fff1f5",
        secondaryBg: "#f9fafb", // Tailwind's gray-50 but in custom
        accentBg: "#608BC1",

        // Text Colors
        primaryText: "#B72960",
        secondaryText: "#5D5D5D",
      },
    },
  },
  plugins: [],
};
