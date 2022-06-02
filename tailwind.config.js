module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "6rem",
					"2xl": "8rem",
				},
			},
			extend: {
				fontFamily: {},
			},
		},
	},
	plugins: [],
};
