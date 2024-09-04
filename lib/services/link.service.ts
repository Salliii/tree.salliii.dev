import { prismaClient } from "@/prisma/client";

export default class LinkService {
	public static async getAllLinks() {
		return prismaClient.link.findMany({
			orderBy: { index: "asc" },
			include: { svg: true },
		});
	}

	public static async getVisibleLinks() {
		return prismaClient.link.findMany({
			where: { visible: true },
			orderBy: { index: "asc" },
			include: { svg: true },
		});
	}

	public static async getLocalLinks() {
		return prismaClient.link.findMany({
			where: { local: { not: null } },
		});
	}

	public static async getLinkById(id: string) {
		return prismaClient.link.findUnique({ where: { id } });
	}

	public static async addLink(data: {
		title: string;
		href: string;
		local?: string | undefined | null;
		highlighted: boolean;
		visible: boolean;
		svgId?: string | undefined | null;
	}) {
		if (data.local) {
			data.href = "locallink";

			const initLink = await prismaClient.link.create({ data });

			data.href = new URL(
				initLink.id,
				process.env.BASE_URL as string
			).href;

			return prismaClient.link.update({
				where: { id: initLink.id },
				data,
			});
		} else {
			return prismaClient.link.create({ data });
		}
	}

	public static async updateLink(
		id: string,
		data: {
			title?: string | undefined;
			href?: string | undefined;
			local?: string | undefined | null;
			highlighted?: boolean | undefined;
			visible?: boolean | undefined;
			index?: number | undefined;
			svgId?: string | undefined | null;
		}
	) {
		const prevLink = await prismaClient.link.findUniqueOrThrow({
			where: { id },
		});

		if (prevLink.local === null && data.local) {
			data.href = new URL(prevLink.id, process.env.BASE_URL).href;
		}

		if (prevLink.local && data.local !== null) {
			data.href = new URL(prevLink.id, process.env.BASE_URL).href;
		}

		if (prevLink.local && data.local === null && data.href === undefined) {
			data.href = new URL("/", process.env.BASE_URL).href;
		}

		return prismaClient.link.update({ where: { id }, data });
	}

	public static async deleteLink(id: string) {
		return prismaClient.link.delete({ where: { id } });
	}
}
