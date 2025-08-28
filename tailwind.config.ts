import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: { light: "#ffffff", dark: "#0b1220" }
      }
    }
  },
  plugins: [],
} satisfies Config
