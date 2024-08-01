import {Merriweather, Roboto_Slab} from "next/font/google";


export const fontRobotoSlab = Roboto_Slab({
	display: "swap",
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-roboto-slab",
});

export const fontMerriweather = Merriweather({
	display: "swap",
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-merriweather",
});
