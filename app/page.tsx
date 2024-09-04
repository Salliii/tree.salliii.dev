"use server";

import FooterComponent from "@/components/footer.component";
import { LinkComponentUiWrapper } from "@/components/link.component";
import css from "@/styles/pages/root.module.css";
import { Suspense } from "react";

export default async function RootPage() {
	return (
		<main>
			<section className={css.headlineWrapper}>
				<span style={{ animationDelay: "400ms" }}>salliii</span>
			</section>
			<Suspense>
				<LinkComponentUiWrapper />
			</Suspense>
			<FooterComponent />
		</main>
	);
}
