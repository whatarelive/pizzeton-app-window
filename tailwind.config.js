/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
			screens: {
				base: '1280px',
				md: '1368px',
				lg: '1600px',
				xl: '1920px',
			},
			colors: {
				aux: '#444444',
        window: '#221E25',
				primary: '#1E1E1E',
				secondary: '#383838',
				thertiary: '#2C2C2C',
			},
		},
  },
  plugins: [],
}

