const svgoConfig = {
	plugins: [
		{
			name: "removeAttrs",
			params: {
				attrs: "(stroke|height|width)",
			},
		},
	],
};

export default svgoConfig;
