"use server";

import LinkService from "@/lib/services/link.service";
import Link from "next/link";
import React from "react";

export async function LinkComponentUiWrapper() {
	const links = await LinkService.getVisibleLinks();

	return (
		<ul className={"w-full h-fit p-8 flex flex-col gap-4"}>
			{links.map((link) => {
				return (
					<LinkComponent
						key={link.index}
						title={link.title}
						highlighted={link.highlighted}
						href={link.href}
						svg={link.svg?.svg || ""}
						newTab={
							!link.href.startsWith(
								process.env.BASE_URL as string
							)
						}
					/>
				);
			})}
		</ul>
	);
}

export async function LinkComponent({
	title,
	highlighted,
	newTab,
	href,
	svg,
}: {
	title: string;
	highlighted: boolean;
	newTab: boolean;
	href: string;
	svg: string;
}) {
	return (
		<li className={"w-full h-fit"}>
			<Link
				className={
					"w-full h-fit flex flex-row items-center gap-2 rounded-md shadow-black shadow-2d border-2 border-black transition-colors " +
					(highlighted ? "bg-red-500" : "bg-blue-500")
				}
				href={href}
				target={newTab ? "_blank" : undefined}
				prefetch={true}
			>
				<div
					className={"w-10 min-w-10 h-10 min-h-10 m-1 stroke-white"}
					dangerouslySetInnerHTML={{ __html: svg }}
				></div>
				<span
					className={
						"w-full h-fit mr-1 text-white text-lg font-roboto-slab"
					}
				>
					{title}
				</span>
			</Link>
		</li>
	);
}
