import {Merriweather, Roboto_Slab} from "next/font/google";
import React from "react";
import "@/styles/globals.css";


const fontRobotoSlab = Roboto_Slab({
	display: "swap",
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-roboto-slab",
});

const fontMerriweather = Merriweather({
	display: "swap",
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-merriweather",
});


export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html className={`${fontRobotoSlab.variable} ${fontMerriweather.variable}`}
			lang={"en"}>
			<body>
				{children}
			</body>
		</html>
	);
}
