"use server";

import css from "@/styles/components/headline.module.css";
import { clsx } from "clsx";
import React from "react";

export default async function HeadlineComponent({
	children,
	className,
	xl,
	delayMs,
	from,
}: {
	children: React.ReactNode;
	className?: string | undefined;
	xl?: number | undefined;
	delayMs?: number | undefined;
	from?: "top" | "bottom" | undefined;
}) {
	return (
		<section className={clsx(css.wrapper, className)}>
			<span
				className={clsx(
					{
						9: "text-9xl",
						8: "text-8xl",
						7: "text-7xl",
						6: "text-6xl",
						5: "text-5xl",
						4: "text-4xl",
						3: "text-3xl",
						2: "text-2xl",
						1: "text-xl",
					}[xl || 1],
					{
						top: "translate-y-full animate-movein-from-top",
						bottom: "-translate-y-full animate-movein-from-bottom",
					}[from || "bottom"]
				)}
				style={{ animationDelay: `${delayMs || 0}ms` }}
			>
				{children}
			</span>
		</section>
	);
}
