"use server";

import LinkComponent from "@/components/link.component";
import GithubIcon from "@/public/svgs/links/github.svg";
import InstagramIcon from "@/public/svgs/links/instagram.svg";
import LinkedinIcon from "@/public/svgs/links/linkedin.svg";
import PinterestIcon from "@/public/svgs/links/pinterest.svg";
import SnapchatIcon from "@/public/svgs/links/snapchat.svg";
import SpotifyIcon from "@/public/svgs/links/spotify.svg";


const staticLinkConfig: {title: string, highlighted: boolean, href: string, icon: any}[] = [
	{
		title: "Instagram", highlighted: false,
		href: "https://www.instagram.com/salliii_02", icon: InstagramIcon,
	},
	{
		title: "Pinterest", highlighted: false,
		href: "https://pin.it/5FH6yjRRS", icon: PinterestIcon,
	},
	{
		title: "GitHub", highlighted: false,
		href: "https://github.com/Salliii", icon: GithubIcon,
	},
	{
		title: "LinkedIn", highlighted: false,
		href: "https://www.linkedin.com/in/silas-schulreich", icon: LinkedinIcon,
	},
	{
		title: "Snapchat", highlighted: false,
		href: "https://www.snapchat.com/add/salliii02?share_id=eo-y931-_lk", icon: SnapchatIcon,
	},
	{
		title: "Spotify", highlighted: false,
		href: "https://open.spotify.com/user/5otfy4jykovu1ypl938xzn7zf?si=Yxn1R807Teu2kBcuI-upnA", icon: SpotifyIcon,
	},
	{
		title: "🌶️ Spicy Content 🍑🍆", highlighted: true,
		href: `${process.env.BASE_URL}/link-local/onlyfans`, icon: undefined,
	},
];

export default async function RootPage() {
	return (
		<main className={"flex flex-col"}>
			<section className={"w-full h-fit border-b border-black flex flex-col items-center overflow-hidden"}>
				<span className={"w-fit text-8xl text-black font-merriweather font-bold uppercase select-none " +
					"-translate-y-full animate-movein-from-bottom"}
					style={{animationDelay: "400ms"}}>
					salliii
				</span>
			</section>
			<ul className={"w-full h-fit p-8 flex flex-col gap-4"}>
				{staticLinkConfig.map((link, index) => {
					return <LinkComponent key={index}
						title={link.title}
						highlighted={link.highlighted}
						href={link.href}
						Icon={link.icon} />;
				})}
			</ul>
			<section className={"h-fit px-8 py-1 mt-auto border-t border-black text-xs text-black font-merriweather" +
				" select-none flex flex-row justify-center"}>
				<span>
					made by salliii
				</span>
			</section>
		</main>
	);
}
