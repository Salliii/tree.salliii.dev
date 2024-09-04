"use server";

import css from "@/styles/components/footer.module.css";

export default async function FooterComponent() {
	return (
		<section className={css.wrapper}>
			<span>made by salliii</span>
		</section>
	);
}
