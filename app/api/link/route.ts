import LinkService from "@/lib/services/link.service";
import {revalidatePath} from "next/cache";
import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";


export const dynamic = "force-dynamic";

export async function GET() {
	try {
		return NextResponse.json(
			await LinkService.getAllLinks(),
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
			title: z.string(),
			href: z.string().url(),
			local: z.string().optional().nullable(),
			highlighted: z.boolean(),
			visible: z.boolean(),
			svgId: z.string().optional().nullable(),
		}).parse(await request.json());

		const link = await LinkService.addLink(body);
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
			title: z.string().optional(),
			href: z.string().url().optional(),
			local: z.string().optional().nullable(),
			highlighted: z.boolean().optional(),
			visible: z.boolean().optional(),
			index: z.number().optional(),
			svgId: z.string().optional().nullable(),
		}).parse(await request.json());

		const link = await LinkService.updateLink(id, body);
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
		const link = await LinkService.deleteLink(id);
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
