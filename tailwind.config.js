/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ["./src/*.{html,js}"],
	theme: {
		screens: {
			'xs': '360px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				'main-grey': 'var(--main-grey)',
				'main-blue': 'var(--main-blue)',
				'font-grey': 'var(--font-grey)',
				'font-deep-grey': 'var(--font-deep-grey)',
				'light-blue': 'var(--light-blue)',
			},
			backgroundImage: {
				'back-verter': "url('./images/back-verter.png')",
				'tab-white': "url('./images/tab-white.png')",
				'tab-grey': "url('./images/tab-grey.png')",
				'scanner': "url('./images/base/scanner.png')",
				'verter': "url('./images/verter-word.png')",
				'verter-2': "url('./images/verter-word-2.png')",
				'macbook-2': "url('./images/macbook2.png')",
				'bg-verter': 	"url('./images/back-verter.png')",
			},
			boxShadow: {
				'main': '0px 0px 50px 5px rgba(201, 202, 246, 0.5)',
				'image': 'inset 43px -48px 42px -12px rgba(0, 0, 0, 0.5)',
				'all': '0px 0px 50px 5px rgba(201, 202, 246, 0.5)' +
					'inset 43px -48px 42px -12px rgba(0, 0, 0, 0.5)',
				'slider': '-3px 4px 44px 2px rgba(34, 60, 80, 0.2)',
			},
			screen: {
				'3xl': '1536px',
			},
		},
	},
	plugins: [],
}
