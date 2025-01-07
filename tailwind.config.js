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
				// Gray scheme
				p_gray_100: '#F7F7F7',
				p_gray_200: '#DDDDDD',
				p_gray_400: '#BBBBBB',
				p_gray_600: '#666666',
				p_gray_900: '#333333',

				// Rosa scheme
				p_rose_300: '#ff866b',
				p_rose_600: '#E2583A',
				p_rose_900: '#CF404A',

				// Violet Scheme
				p_violet: '#9E41CA',

				// Green Scheme
				p_green: '#4B9F61',

				// Golden Scheme
				p_golden: '#C78A05',

				// Blue Scheme
				p_blue: '#417EE8',

				window: '#221E25',
			},
		},
  },
  plugins: [],
}

