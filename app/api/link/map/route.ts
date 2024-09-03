import LinkService from "@/lib/services/link.service";
import {NextResponse} from "next/server";


export const dynamic = "force-dynamic";

export async function GET() {
	try {
		return NextResponse.json(
			await LinkService.getVisibleLinks(),
			{status: 200},
		);
	} catch (error) {
		return NextResponse.json(
			"400 Bad Request",
			{status: 400},
		);
	}
}
