import {prismaClient} from "@/prisma/client";
import {NextResponse} from "next/server";


export const dynamic = "force-dynamic";

export async function GET() {
	const result = await prismaClient.link.findMany({
		where: {visible: true},
		orderBy: {index: "asc"},
		include: {svg: true},
	});

	return NextResponse.json(result, {status: 200});
}
