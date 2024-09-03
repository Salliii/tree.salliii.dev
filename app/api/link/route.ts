import LinkService from "@/lib/services/link.service";
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
			highlighted: z.boolean(),
			visible: z.boolean(),
			svgId: z.string().optional(),
		}).parse(await request.json());

		return NextResponse.json(
			await LinkService.addLink(body),
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
			highlighted: z.boolean().optional(),
			visible: z.boolean().optional(),
			index: z.number().optional(),
			svgId: z.string().optional(),
		}).parse(await request.json());

		return NextResponse.json(
			await LinkService.updateLink(id, body),
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
		return NextResponse.json(
			await LinkService.deleteLink(id),
			{status: 200},
		);
	} catch (error) {
		return NextResponse.json(
			"400 Bad Request",
			{status: 400},
		);
	}
}
