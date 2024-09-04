"use server";

export default async function NotFound() {
	return (
		<main className={"flex flex-col justify-center"}>
			<section
				className={
					"border-y border-black flex flex-col items-center relative after:w-full after:h-full after:bg-white after:absolute after:-z-10 after:translate-y-1 after:translate-x-1"
				}
			>
				<span className={"text-8xl font-roboto-slab select-none"}>
					404
				</span>
			</section>
		</main>
	);
}
