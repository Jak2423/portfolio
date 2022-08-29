const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono', ...fontFamily.mono],
			},
			colors: {
				primary: '#ff4545',
				secondary: '#383838',
			},
			gray: {
				0: '#fff',
				100: '#fafafa',
				200: '#eaeaea',
				300: '#999999',
				400: '#888888',
				500: '#666666',
				600: '#444444',
				700: '#333333',
				800: '#222222',
				900: '#111111',
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-100%)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.5s linear',
				'fade-in-down': 'fade-in-down 0.5s linear',
			},
		},
	},
	plugins: [],
};
