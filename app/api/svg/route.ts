import SvgService from "@/lib/services/svg.service";
import svgoConfig from "@/svgo.config.mjs";
import {NextRequest, NextResponse} from "next/server";
import {optimize} from "svgo";
import {z} from "zod";


export const dynamic = "force-dynamic";

export async function GET() {
	return SvgService
		.getAllSvgs()
		.then((result) => {
			return NextResponse.json(
				result,
				{status: 200},
			);
		})
		.catch(() => {
			return NextResponse.json(
				"500 Internal Server Error",
				{status: 500},
			);
		});
}


export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	if (!secret || secret != process.env.SECRET) {
		return NextResponse.json(
			"401 Unauthorized",
			{status: 401},
		);
	}

	const body = z.object({
		name: z.string(),
		svg: z.string(),
	}).safeParse(await request.json());


	if (body.success) {
		try {
			body.data.svg = optimize(body.data.svg, svgoConfig as any).data;
		} catch (error) {
			return NextResponse.json(
				"424 Failed Dependency",
				{status: 424},
			);
		}

		return SvgService
			.addSvg(body.data)
			.then((result) => {
				return NextResponse.json(
					result,
					{status: 200},
				);
			})
			.catch(() => {
				return NextResponse.json(
					"400 Bad Request",
					{status: 400},
				);
			});
	}

	return NextResponse.json(
		"400 Bad Request",
		{status: 400},
	);
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

	const body = z.object({
		name: z.string().optional(),
		svg: z.string().optional(),
	}).safeParse(await request.json());

	if (body.success) {
		if (body.data.svg) {
			try {
				body.data.svg = optimize(body.data.svg, svgoConfig as any).data;
			} catch (error) {
				return NextResponse.json(
					"424 Failed Dependency",
					{status: 424},
				);
			}
		}

		return SvgService
			.updateSvg(id, body.data)
			.then((result) => {
				return NextResponse.json(
					result,
					{status: 200},
				);
			})
			.catch(() => {
				return NextResponse.json(
					"400 Bad Request",
					{status: 400},
				);
			});
	}

	return NextResponse.json(
		"400 Bad Request",
		{status: 400},
	);
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

	return SvgService
		.deleteSvg(id)
		.then((result) => {
			return NextResponse.json(
				result,
				{status: 200},
			);
		})
		.catch(() => {
			return NextResponse.json(
				"400 Bad Request",
				{status: 400},
			);
		});
}
