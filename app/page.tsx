"use server";

import FooterComponent from "@/components/footer.component";
import LinkWrapper from "@/components/link/link.wrapper";
import css from "@/styles/pages/app.module.css";
import { Suspense } from "react";

export default async function RootPage() {
	return (
		<main>
			<section className={css.headlineWrapper}>
				<span style={{ animationDelay: "400ms" }}>salliii</span>
			</section>
			<Suspense>
				<LinkWrapper />
			</Suspense>
			<FooterComponent />
		</main>
	);
}
