import SvgService from "@/lib/services/svg.service";
import svgoConfig from "@/svgo.config.mjs";
import {revalidatePath} from "next/cache";
import {NextRequest, NextResponse} from "next/server";
import {optimize} from "svgo";
import {z} from "zod";


export const dynamic = "force-dynamic";

export async function GET() {
	try {
		return NextResponse.json(
			await SvgService.getAllSvgs(),
			{status: 200},
		);
	} catch (error) {
		return NextResponse.json(
			"400 Bad Request",
			{status: 400},
		);
	}
}


export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	if (!secret || secret != process.env.SECRET) {
		return NextResponse.json(
			"401 Unauthorized",
			{status: 401},
		);
	}

	try {
		const body = z.object({
			name: z.string(),
			svg: z.string(),
		}).parse(await request.json());

		body.svg = optimize(body.svg, svgoConfig as any).data;

		const link = SvgService.addSvg(body);
		revalidatePath("/", "page");

		return NextResponse.json(
			link,
			{status: 200},
		);
	} catch (error) {
		return NextResponse.json(
			"400 Bad Request",
			{status: 400},
		);
	}
}

export async function PATCH(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	if (!secret || secret != process.env.SECRET) {
		return NextResponse.json(
			"401 Unauthorized",
			{status: 401},
		);
	}

	const id = request.nextUrl.searchParams.get("id");
	if (!id) {
		return NextResponse.json(
			"400 Bad Request",
			{status: 400},
		);
	}

	try {
		const body = z.object({
			name: z.string().optional(),
			svg: z.string().optional(),
		}).parse(await request.json());

		if (body.svg) {
			body.svg = optimize(body.svg, svgoConfig as any).data;
		}

		const link = await SvgService.updateSvg(id, body);
		revalidatePath("/", "page");

		return NextResponse.json(
			link,
			{status: 200},
		);
	} catch (error) {
		return NextResponse.json(
			"400 Bad Request",
			{status: 400},
		);
	}
}

export async function DELETE(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	if (!secret || secret != process.env.SECRET) {
		return NextResponse.json(
			"401 Unauthorized",
			{status: 401},
		);
	}

	const id = request.nextUrl.searchParams.get("id");
	if (!id) {
		return NextResponse.json(
			"400 Bad Request",
			{status: 400},
		);
	}

	try {
		const link = await SvgService.deleteSvg(id);
		revalidatePath("/", "page");

		return NextResponse.json(
			link,
			{status: 200},
		);
	} catch (error) {
		return NextResponse.json(
			"400 Bad Request",
			{status: 400},
		);
	}
}
