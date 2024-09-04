import LinkService from "@/lib/services/link.service";
import {MetadataRoute} from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: "https://tree.salliii.dev/",
			lastModified: new Date(),
		},
		...(await LinkService.getLocalLinks()).map((link) => {
			return {
				url: link.href,
				lastModified: new Date(),
			};
		}),
	];
}
