"use server";

import LinkComponent from "@/components/link/link.component";
import LinkService from "@/lib/services/link.service";
import css from "@/styles/components/link/link.wrapper.module.css";
import React from "react";

export default async function LinkWrapper() {
	const links = await LinkService.getVisibleLinks();

	return (
		<ul className={css.wrapper}>
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
