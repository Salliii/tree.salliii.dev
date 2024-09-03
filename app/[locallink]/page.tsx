import SpicyLocalPage from "@/app/[locallink]/spicy";
import LinkService from "@/lib/services/link.service";
import {notFound} from "next/navigation";


export default async function LocalLinkProxy({params}: {params: {locallink: string}}) {
	const link = await LinkService.getLinkById(params.locallink);

	if (!link || !link.local) {
		notFound();
	}

	switch (link.local) {
		case "spicy": {
			return <SpicyLocalPage />;
		}
		default:
			notFound();
	}
}
