module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	important: "#root",
	theme: {
		fontFamily: {
			sans: ["Nunito", "sans-serif"],
		},
		extend: {
			container: {
				center: true,
				// mx: {
				// 	pp: "20px",
				// 	pl: "20px",
				// 	tp: "40px",
				// 	tl: "40px",
				// 	lp: "120px",
				// 	dp: "120px",
				// },
				// padding: {
				// 	DEFAULT: "1rem",
				// 	sm: "2rem",
				// 	lg: "4rem",
				// 	xl: "6rem",
				// 	"2xl": "8rem",
				// },
			},
			colors: {
				brown: "#A67A4A",
				"med-brown": "#c09863",
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
				white: "#FFF",
			},
			backgroundImage: {
				"linear-cream":
					"linear-gradient(89.55deg, #FFF9EE 0%, rgba(255, 240, 215, 0) 100%);",
			},
			screens: {
				"3xl": "1600px",
				"4xl": "2560px",
			},
		},
	},
	plugins: [],
};
