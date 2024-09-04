import LinkService from "@/lib/services/link.service";
import {notFound} from "next/navigation";
import React from "react";


export default async function LocalLinkProxy({
	params,
	spicy,
}: {
	params: {locallink: string},
	spicy: React.ReactNode
}) {
	return ({
		"spicy": spicy,
	}[(await LinkService.getLinkById(params.locallink))?.local || ""] || notFound());
}
