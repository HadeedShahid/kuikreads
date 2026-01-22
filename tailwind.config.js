/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#ec9213",
        "primary-hover": "#d98511",
        background: "#f8f7f6",
        parchment: "#fdfaf6",
        text: "#181511",
        "text-muted": "#897961",
        border: "#e6e1db",
      },
      fontFamily: {
        sans: ["Newsreader_400Regular"],
        "sans-medium": ["Newsreader_500Medium"],
        "sans-semibold": ["Newsreader_600SemiBold"],
        "sans-bold": ["Newsreader_700Bold"],
        "sans-italic": ["Newsreader_400Regular_Italic"],
      },
    },
  },
  plugins: [],
};
