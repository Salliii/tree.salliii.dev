"use server";

import Link from "next/link";
import React from "react";


export default async function LinkComponent({
	title, highlighted, newTab, href, svg,
}: {
	title: string, highlighted: boolean, newTab: boolean, href: string, svg: string,
}) {
	return (
		<li className={"w-full h-fit"}>
			<Link className={"w-full h-fit flex flex-row items-center gap-2 rounded-md shadow-black shadow-2d " +
				"border-2 border-black transition-colors " + (highlighted ? "bg-red-500" : "bg-blue-500")}
				href={href}
				target={newTab ? "_blank" : undefined}>
				<div className={"w-10 min-w-10 h-10 min-h-10 m-1 stroke-white"}
					dangerouslySetInnerHTML={{__html: svg}}>
				</div>
				<span className={"w-full h-fit mr-1 text-white text-lg font-roboto-slab"}>
					{title}
				</span>
			</Link>
		</li>
	);
}
