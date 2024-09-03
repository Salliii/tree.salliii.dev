"use server";

import Link from "next/link";


export default async function Back() {
	const url = new URL("/", process.env.BASE_URL);

	return (
		<Link className={"w-fit h-fit px-4 py-0.5 absolute top-4 left-4 rounded-md shadow-blue-500 shadow-2d " +
			"border-2 border-black after:w-full after:h-full after:absolute after:top-0.5 after:left-0.5 " +
			"after:bg-blue-500 after:rounded-tl-md after:-z-10"}
			href={url}>
			<span className={"text-white font-roboto-slab"}>
				Back
			</span>
		</Link>
	);
}
