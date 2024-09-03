import LinkService from "@/lib/services/link.service";
import {NextResponse} from "next/server";


export const dynamic = "force-dynamic";

export async function GET() {
	return LinkService
		.getVisibleLinks()
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
