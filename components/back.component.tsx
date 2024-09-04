"use server";

import ArrowIcon from "@/public/svgs/arrow-left.svg";
import css from "@/styles/components/back.module.css";
import Link from "next/link";

export default async function Back() {
	const url = new URL("/", process.env.BASE_URL).href;

	return (
		<Link className={css.link} href={url}>
			<div className={css.iconWrapper}>
				<ArrowIcon />
			</div>
			<span>Back</span>
		</Link>
	);
}
