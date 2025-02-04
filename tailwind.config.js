/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				base: '1280px',
				md: '1368px',
				lg: '1600px',
				xl: '1920px'
			},
			colors: {
				p_gray_100: '#F7F7F7',
				p_gray_200: '#DDDDDD',
				p_gray_400: '#BBBBBB',
				p_gray_600: '#666666',
				p_gray_900: '#333333',
				p_rose_300: '#ff866b',
				p_rose_600: '#E2583A',
				p_rose_700: '#FE785A',
				p_rose_900: '#CF404A',
				p_violet: '#9E41CA',
				p_green: '#4B9F61',
				p_golden: '#C78A05',
				p_blue: '#417EE8',
				window: '#221E25'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
  plugins: [import("tailwindcss-animate")],
}

