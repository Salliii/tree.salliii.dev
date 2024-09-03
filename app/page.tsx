"use server";

import FooterComponent from "@/components/footer.component";
import {LinkComponentUiWrapper} from "@/components/link.component";
import {Suspense} from "react";


export default async function RootPage() {
	return (
		<main className={"flex flex-col"}>
			<section className={"w-full h-fit border-b border-black flex flex-col items-center overflow-hidden"}>
				<span className={"w-fit text-8xl text-black font-merriweather font-bold uppercase select-none " +
					"-translate-y-full animate-movein-from-bottom"}
					style={{animationDelay: "400ms"}}>
					salliii
				</span>
			</section>
			<Suspense>
				<LinkComponentUiWrapper />
			</Suspense>
			<FooterComponent />
		</main>
	);
}
