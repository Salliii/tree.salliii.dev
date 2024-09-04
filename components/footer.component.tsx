"use server";

export default async function FooterComponent() {
	return (
		<section
			className={
				"w-full h-fit px-8 py-1 border-t border-black text-xs text-black font-merriweather select-none flex flex-row justify-center absolute bottom-0"
			}
		>
			<span>made by salliii</span>
		</section>
	);
}
