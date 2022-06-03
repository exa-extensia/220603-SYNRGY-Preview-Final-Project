module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			brown: "#A67A4A",
			goldie: "#FFEDCD",
			cream: "#FCF5EA",
			black: "#515151",
			grey: "#C4C4C4",
			"med-gray": "#E3E3E3",
			"soft-gray": "#F6F6F6",
			success: "#7EC722",
			warning: "#FFC634",
			danger: "#FF6523",
			primary: "#5FADF4",
			neutral: "#C4C4C4",
		},
		fontFamily: {
			sans: ["Nunito", "sans-serif"],
		},
		extend: {
			container: {
				center: true,
				mx: {
					pp: "20px",
					pl: "20px",
					tp: "40px",
					tl: "40px",
					lp: "120px",
					dp: "120px",
				},
				// padding: {
				// 	DEFAULT: "1rem",
				// 	sm: "2rem",
				// 	lg: "4rem",
				// 	xl: "6rem",
				// 	"2xl": "8rem",
				// },
			},
			backgroundImage: {
				"linear-cream":
					"linear-gradient(180deg, #FCF5EA 0%, rgba(252, 245, 234, 0) 100%);",
			},
		},
	},
	plugins: [],
};
