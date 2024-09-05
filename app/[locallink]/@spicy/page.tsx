"use server";

import BacklinkComponent from "@/components/backlink.component";
import FooterComponent from "@/components/footer.component";
import PointingLeonardoGif from "@/public/gifs/pointing_leonardo.gif";
import css from "@/styles/pages/spicy.module.css";
import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

export default async function SpicyLocalPage() {
	return (
		<main className={css.main}>
			<section className={clsx(css.textWrapper, "border-t")}>
				<span
					className={css.topText}
					style={{ animationDelay: "400ms" }}
				>
					you naughty piece
				</span>
			</section>
			<section className={css.gifWrapper}>
				<Image
					src={PointingLeonardoGif as unknown as string}
					unoptimized={true}
					priority={true}
					alt={""}
				/>
			</section>
			<section className={clsx(css.textWrapper, "border-b")}>
				<div
					className={css.bottomText}
					style={{ animationDelay: "1200ms" }}
				>
					<span className={"text-base"}>
						no spicy content, just judgment!
						<br />
					</span>
					<span className={"text-3xl"}>!!! shame on you !!!</span>
				</div>
			</section>
			<BacklinkComponent />
			<FooterComponent />
		</main>
	);
}
