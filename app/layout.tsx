"use server";

import {fontMerriweather, fontRobotoSlab} from "@/public/fonts";
import React from "react";
import "@/public/styles/globals.css";


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
