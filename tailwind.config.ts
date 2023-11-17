import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': "#2A3443",
      'secondary': "#D7D7D0",
      'accent': "#C99B63"
    },
    fontSize: {
      'xl': "4.75rem",
      'lg': "3.06rem",
      'base': "2.44rem",
      'sm': "1.56rem",
      'xs': "1.25rem"
    },
    extend: {},
  },
  plugins: [],
}
export default config
