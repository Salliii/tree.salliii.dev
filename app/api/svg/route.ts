import {prismaClient} from "@/prisma/client";
import svgoConfig from "@/svgo.config.mjs";
import {NextRequest, NextResponse} from "next/server";
import {optimize} from "svgo";


export const dynamic = "force-dynamic";

export async function GET() {
	const result = await prismaClient.svg.findMany();

	return NextResponse.json(result, {status: 200});
}


export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	if (!secret || secret != process.env.SECRET) {
		return NextResponse.json("401 Unauthorized", {status: 401});
	}

	const {name, svg}: {
		name: string,
		svg: string,
	} = await request.json();

	let optimizedSvg = undefined;
	try {
		optimizedSvg = optimize(svg, svgoConfig as any).data;
	} catch (error) {
		return NextResponse.json("424 Failed Dependency: svgo optimization", {status: 424});
	}


	const result = await prismaClient.svg.create({
		data: {
			name,
			svg: optimizedSvg,
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

	const {name, svg}: {
		name?: string | undefined,
		svg?: string | undefined,
	} = await request.json();

	let optimizedSvg = undefined;
	if (svg) {
		try {
			optimizedSvg = optimize(svg, svgoConfig as any).data;
		} catch (error) {
			return NextResponse.json("424 Failed Dependency: svgo optimization", {status: 424});
		}
	}

	const result = await prismaClient.svg.update({
		where: {id},
		data: {
			name,
			svg: optimizedSvg,
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

	const result = await prismaClient.svg.delete({
		where: {id},
	});

	return NextResponse.json(result, {status: 200});
}
