"use server";

import FooterComponent from "@/components/footer.component";
import HeadlineComponent from "@/components/headline.component";
import LinkWrapper from "@/components/link/link.wrapper";
import { Suspense } from "react";

export default async function RootPage() {
	return (
		<main>
			<HeadlineComponent className={"border-b"} xl={8} delayMs={200}>
				salliii
			</HeadlineComponent>
			<Suspense>
				<LinkWrapper />
			</Suspense>
			<FooterComponent />
		</main>
	);
}
