"use server";

import FooterComponent from "@/components/footer.component";
import LinkComponent from "@/components/link.component";
import {Link, Svg} from "@prisma/client";


async function fetchLinks(): Promise<(Link & {svg?: Svg})[]> {
	const result = await fetch(
		new URL("/api/link/map", process.env.BASE_URL),
		{
			cache: "no-store",
			method: "GET",
		},
	);

	return await result.json();
}

export default async function RootPage() {
	const links = await fetchLinks();

	return (
		<main className={"flex flex-col"}>
			<section className={"w-full h-fit border-b border-black flex flex-col items-center overflow-hidden"}>
				<span className={"w-fit text-8xl text-black font-merriweather font-bold uppercase select-none " +
					"-translate-y-full animate-movein-from-bottom"}
					style={{animationDelay: "400ms"}}>
					salliii
				</span>
			</section>
			<ul className={"w-full h-fit p-8 flex flex-col gap-4"}>
				{links.map((link) => {
					return <LinkComponent key={link.index}
						title={link.title}
						highlighted={link.highlighted}
						newTab={!link.href.includes("link-local")}
						href={link.href}
						svg={link.svg?.svg || ""} />;
				})}
			</ul>
			<FooterComponent />
		</main>
	);
}
