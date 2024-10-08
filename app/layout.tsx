import { clsx } from "clsx";
import { Merriweather, Roboto_Slab } from "next/font/google";
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

export const metadata = {
	title: "tree.salliii.dev",
	verification: { google: "qVigOLuevQVd6yFT_kwcE2EyxeseMfMvruHCLV36RUg" },
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className={clsx(fontRobotoSlab.variable, fontMerriweather.variable)}
			lang={"en"}
		>
			<body>{children}</body>
		</html>
	);
}
