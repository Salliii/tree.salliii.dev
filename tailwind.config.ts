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
		},
	},
	plugins: [],
};
export default config;
