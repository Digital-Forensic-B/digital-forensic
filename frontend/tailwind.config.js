/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				84: '21rem',
				88: '22rem',
				92: '23rem',
				128: '32rem',
				180: '45rem',
				200: '50rem',
				208: '52rem',
				232: '58rem',
				240: '60rem',
				256: '64rem',
			},
			height: {
				84: '21rem',
				88: '22rem',
				92: '23rem',
				128: '32rem',
				144: '36rem',
				152: '38rem',
				160: '40rem',
				172: '43rem',
				208: '52rem',
				256: '64rem',
			},
		},
	},
	plugins: [],
}
