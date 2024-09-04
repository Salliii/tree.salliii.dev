import {MetadataRoute} from "next";


export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: [
				"/api/link/",
				"/api/svg/",
			],
		},
		sitemap: "https://tree.salliii.dev/sitemap.xml",
	};
}
