"use server";

import css from "@/styles/components/link/link.component.module.css";
import { clsx } from "clsx";
import Link from "next/link";
import React from "react";

export default async function LinkComponent({
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
		<li className={css.wrapper}>
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
					className={css.icon}
					dangerouslySetInnerHTML={{ __html: svg }}
				></div>
				<span className={css.title}>{title}</span>
			</Link>
		</li>
	);
}
