"use server";

import css from "@/styles/pages/not-found.module.css";

export default async function NotFound() {
	return (
		<main className={css.main}>
			<section className={css.errorWrapper}>
				<span>404</span>
			</section>
		</main>
	);
}
