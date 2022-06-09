import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const StyledTab = styled(Tab)({
		"&.Mui-selected": {
			color: "#c09863",
		},
	});

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="scrollable auto tabs example"
					TabIndicatorProps={{ style: { background: "#c09863" } }}
				>
					<StyledTab label="Deskripsi" />
					<StyledTab label="Cara Pakai" />
					<StyledTab label="Komposisi" />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<ol>
					<li>
						Di dalam Scarlett Whitening Facial Wash terdapat kandungan
						Glutathione, Vitamin E, Rose Petals dan Aloe Vera yang sangat bagus
						untuk :
					</li>
					<li>1. Membantu mencerahkan wajah.</li>
					<li>2. Membantu menutrisi serta mengecilkan pori-pori di wajah.</li>
					<li>3. Membantu mengontrol kadar minyak berlebih di wajah.</li>
					<li>4. Membantu menghilangkan beruntus/jerawat di wajah.</li>
					<li>5. Membantu meregenerasi kulit wajah agar tampak lebih fresh.</li>
				</ol>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ol>
					<li>1. Basuh wajah dengan air</li>
					<li>
						2. Tuang Facial Wash Scarlett pada tangan lalu usapkan pada wajah.
					</li>
					<li>3. Bilas dengan air bersih.</li>
					<li>
						Gunakan secara rutin sehari dua kali pada pagi dan malam hari. Untuk
						hasil maksimal gunakan juga rangkaiannya, seperti Brightening
						Moisturizer Scarlett.
					</li>
				</ol>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<ol>
					<li>1. Glutathione</li>
					<li>2. TOCOPHEROL</li>
					<li>3. Lauryl Betaine</li>
					<li>4. Water</li>
					<li>5. Tetrahydroxypropyl Ethylenediamine</li>
					<li>6. Dmdm hydantoin</li>
				</ol>
			</TabPanel>
		</Box>
	);
}
