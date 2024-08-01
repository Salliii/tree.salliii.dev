import {Config} from "tailwindcss";


const config: Config = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"roboto-slab": ["var(--font-roboto-slab)"],
				"merriweather": ["var(--font-merriweather)"],
			},
			boxShadow: {
				"2d": "4px 4px 0px 0px rgb(0,0,0)",
			},
			keyframes: {
				"movein-from-bottom": {
					"0%": {transform: "translateY(200%)"},
					"50%, 100%": {transform: "translateY(0%)"},
				},
			},
			animation: {
				"movein-from-bottom": "movein-from-bottom 1600ms ease-out forwards",
			},
		},
	},
	plugins: [],
};
export default config;
