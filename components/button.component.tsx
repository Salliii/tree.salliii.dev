"use server";

import React from "react";


export default async function ButtonComponent({
	title, onClickHandler,
}: {
	title: string, onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}) {
	return (
		<button className={"w-fit h-fit px-4 py-0.5 relative rounded-md shadow-blue-500 shadow-2d " +
			"border-2 border-black after:w-full after:h-full after:absolute after:top-0.5 after:left-0.5 " +
			"after:bg-blue-500 after:rounded-tl-md after:-z-10"}
			onClick={onClickHandler}>
			<span className={"text-white font-roboto-slab"}>
				{title}
			</span>
		</button>
	);
}
