"use server";

import BacklinkComponent from "@/components/backlink.component";
import FooterComponent from "@/components/footer.component";
import HeadlineComponent from "@/components/headline.component";
import PointingLeonardoGif from "@/public/gifs/pointing_leonardo.gif";
import css from "@/styles/pages/spicy.module.css";
import Image from "next/image";
import React from "react";

export default async function SpicyLocalPage() {
	return (
		<main className={css.main}>
			<HeadlineComponent className={"border-t"} xl={3} delayMs={200}>
				you naughty piece
			</HeadlineComponent>
			<section className={css.gifWrapper}>
				<Image
					src={PointingLeonardoGif as unknown as string}
					unoptimized={true}
					priority={true}
					alt={""}
				/>
			</section>
			<HeadlineComponent
				className={"border-b"}
				delayMs={600}
				from={"top"}
			>
				<span className={"text-base"}>
					no spicy content, just judgment!
					<br />
				</span>
				<span className={"text-3xl"}>!!! shame on you !!!</span>
			</HeadlineComponent>
			<BacklinkComponent />
			<FooterComponent />
		</main>
	);
}
