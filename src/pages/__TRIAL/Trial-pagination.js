import axios from "axios";
import { useEffect, useState } from "react";

import { Pagination } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPagination = styled(Pagination)({
	ul: {
		"& .MuiPaginationItem-root": {
			color: "#c09863",
			"&.Mui-selected": {
				background: "#c09863",
				color: "white",
			},
		},
	},
});

export default function ProductListPagination() {
	//pageApi
	const [pageApi, setPageApi] = useState(1);
	//API
	const ApiAddress = axios.create({
		baseURL: "https://rent-cars-api.herokuapp.com/admin/car",
	});
	useEffect(() => {
		ApiAddress.get("?page=" + pageApi)
			.then((res: any) => console.log(res))
			.catch((err: any) => console.log(err));
	}, [pageApi]);

	return (
		<div className="pagination">
			<StyledPagination
				count={10}
				shape="rounded"
				onChange={(e, value) => setPageApi(value)}
			/>
		</div>
	);
}
