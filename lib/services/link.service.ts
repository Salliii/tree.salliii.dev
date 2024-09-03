import {prismaClient} from "@/prisma/client";


export default class LinkService {
	public static async getAllLinks() {
		return prismaClient.link.findMany({
			orderBy: {index: "asc"},
			include: {svg: true},
		});
	}

	public static async getVisibleLinks() {
		return prismaClient.link.findMany({
			where: {visible: true},
			orderBy: {index: "asc"},
			include: {svg: true},
		});
	}

	public static async addLink(data: {
		title: string;
		href: string;
		highlighted: boolean;
		visible: boolean;
		svgId?: string | undefined;
	}) {
		return prismaClient.link.create({data});
	}

	public static async updateLink(id: string, data: {
		title?: string | undefined;
		href?: string | undefined;
		highlighted?: boolean | undefined;
		visible?: boolean | undefined;
		index?: number | undefined;
		svgId?: string | undefined;
	}) {
		return prismaClient.link.update({where: {id}, data});
	}

	public static async deleteLink(id: string) {
		return prismaClient.link.delete({where: {id}});
	}
}
