"use server";

import Back from "@/components/back.component";
import FooterComponent from "@/components/footer.component";
import PointingLeonardoGif from "@/public/gifs/pointing_leonardo.gif";
import Image from "next/image";
import React from "react";


export default async function OnlyfansPage() {
	return (
		<main className={"flex flex-col items-center justify-center"}>
			<section className={"w-full h-fit flex flex-col justify-center"}>
				<section className={"h-fit flex flex-col relative"}>
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
				</section>
				<Back />
			</section>
			<FooterComponent />
		</main>
	);
}
