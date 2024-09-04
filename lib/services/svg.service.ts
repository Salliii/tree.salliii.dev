import { prismaClient } from "@/prisma/client";

export default class SvgService {
	public static async getAllSvgs() {
		return prismaClient.svg.findMany();
	}

	public static async addSvg(data: { name: string; svg: string }) {
		return prismaClient.svg.create({ data });
	}

	public static async updateSvg(
		id: string,
		data: {
			name?: string | undefined;
			svg?: string | undefined;
		}
	) {
		return prismaClient.svg.update({ where: { id }, data });
	}

	public static async deleteSvg(id: string) {
		return prismaClient.svg.delete({ where: { id } });
	}
}
