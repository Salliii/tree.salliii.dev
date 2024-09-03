import {prismaClient} from "@/prisma/client";
import {NextRequest, NextResponse} from "next/server";


export async function GET() {
	const result = await prismaClient.link.findMany({
		include: {
			svg: true,
		},
	});

	return NextResponse.json(result, {status: 200});
}

export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	if (!secret || secret != process.env.SECRET) {
		return NextResponse.json("401 Unauthorized", {status: 401});
	}

	const {title, href, highlighted, svgId}: {
		title: string,
		href: string,
		highlighted: boolean,
		svgId?: string | undefined
	} = await request.json();

	const result = await prismaClient.link.create({
		data: {
			title,
			href,
			highlighted,
			svgId,
		},
	});

	return NextResponse.json(result, {status: 201});
}

export async function PATCH(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	if (!secret || secret != process.env.SECRET) {
		return NextResponse.json("401 Unauthorized", {status: 401});
	}

	const id = request.nextUrl.searchParams.get("id");
	if (!id) {
		return NextResponse.json("400 Bad Request", {status: 400});
	}

	const {title, href, highlighted, svgId}: {
		title?: string | undefined,
		href?: string | undefined,
		highlighted?: boolean | undefined,
		svgId?: string | undefined
	} = await request.json();

	const result = await prismaClient.link.update({
		where: {id},
		data: {
			title,
			href,
			highlighted,
			svgId,
		},
	});

	return NextResponse.json(result, {status: 200});
}

export async function DELETE(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	if (!secret || secret != process.env.SECRET) {
		return NextResponse.json("401 Unauthorized", {status: 401});
	}

	const id = request.nextUrl.searchParams.get("id");
	if (!id) {
		return NextResponse.json("400 Bad Request", {status: 400});
	}

	const result = await prismaClient.link.delete({
		where: {id},
	});

	return NextResponse.json(result, {status: 200});
}
