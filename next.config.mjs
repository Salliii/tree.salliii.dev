import svgoConfig from "./svgo.config.mjs";

const nextConfig = {
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg")
		);

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {
					not: [...fileLoaderRule.resourceQuery.not, /url/],
				},
				use: [
					{
						loader: "@svgr/webpack",
						options: {
							svgoConfig: svgoConfig,
						},
					},
				],
			}
		);

		fileLoaderRule.exclude = /\.svg$/i;
		return config;
	},
};

export default nextConfig;
