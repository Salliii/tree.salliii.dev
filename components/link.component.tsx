"use server";

import LinkService from "@/lib/services/link.service";
import css from "@/styles/components/link.module.css";
import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

export async function LinkComponentUiWrapper() {
	const links = await LinkService.getVisibleLinks();

	return (
		<ul className={css.linksUiWrapper}>
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
		<li className={css.linkWrapper}>
			<Link
				className={clsx(css.link, {
					"bg-red-500": highlighted,
					"bg-blue-500": !highlighted,
				})}
				href={href}
				target={newTab ? "_blank" : undefined}
				prefetch={true}
			>
				<div
					className={css.iconWrapper}
					dangerouslySetInnerHTML={{ __html: svg }}
				></div>
				<span className={css.title}>{title}</span>
			</Link>
		</li>
	);
}
