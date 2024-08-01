"use server";

import {NextRequest, NextResponse} from "next/server";


const staticRouteMap: {[key: string]: string} = {
	"https://onlyfans.com/salliii": "/redirect/local/onlyfans",
};

export async function GET(request: NextRequest) {
	const route = request.nextUrl.searchParams.get("");

	if (!route) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	if (staticRouteMap[route]) {
		return NextResponse.redirect(new URL(staticRouteMap[route], request.url));
	}

	try {
		return NextResponse.redirect(route);
	} catch (error) {
		return NextResponse.redirect(new URL("/", request.url));
	}
}
