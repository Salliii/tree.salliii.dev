"use server";

import BackLinkComponent from "@/components/back-link.component";
import ButtonComponent from "@/components/button.component";
import FooterComponent from "@/components/footer.component";
import PointingLeonardoGif from "@/public/gifs/pointing_leonardo.gif";
import ArrowDownIcon from "@/public/svgs/arrow-down.svg";
import Image from "next/image";
import React from "react";


export default async function OnlyfansPage() {
	return (
		<main className={"flex flex-col"}>
			<section className={"min-h-screen flex flex-col justify-center"}>
				<section className={"w-full h-fit py-1 border-t border-black flex flex-col items-center overflow-hidden " +
					"-z-10"}>
				<span className={"w-fit text-3xl text-black text-center font-merriweather font-bold uppercase " +
					"select-none -translate-y-full animate-movein-from-bottom"}
					style={{animationDelay: "400ms"}}>
					you naughty piece
				</span>
				</section>
				<section className={"w-full h-fit p-8 border-y border-black flex flex-col items-center relative -z-10"}>
					<Image className={"shadow-2d border-2 border-black rounded-md brightness-200"}
						src={PointingLeonardoGif as unknown as string}
						unoptimized={true}
						alt={""} />
				</section>
				<section className={"w-full h-fit py-1 border-b border-black overflow-hidden -z-10"}>
					<div className={"w-full h-fit text-black text-center font-merriweather font-bold uppercase " +
						"select-none flex flex-col items-center translate-y-full animate-movein-from-top"}
						style={{animationDelay: "1200ms"}}>
					<span className={"text-base"}>
					no spicy content, just judgment!<br />
				</span>
						<span className={"text-3xl"}>
					!!! shame on you !!!
				</span>
					</div>
				</section>
				<div className={"w-full h-fit absolute bottom-0 left-0 flex flex-col items-center"}>
					<div className={"w-8 h-8 stroke-black -translate-x-1/2 -translate-y-1/2 animate-bounce"}>
						<ArrowDownIcon />
					</div>
				</div>
				<BackLinkComponent />
			</section>
			<section className={"w-full h-fit px-8 py-4 flex flex-col items-center gap-2"}>
				<div className={"w-full h-fit text-base text-black font-merriweather flex flex-row gap-y-1 items-center justify-center flex-wrap"}>
					<span>Spicy content? &nbsp;</span>
					<span>Your <ButtonComponent title={"vote"} /> &nbsp;decides!</span>
				</div>
			</section>
			<FooterComponent />
		</main>
	);
}
