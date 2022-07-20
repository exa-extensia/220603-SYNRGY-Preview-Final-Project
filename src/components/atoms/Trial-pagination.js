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

export default function ProductListPagination({ size, handlePageClick }) {
	return (
		<div className="pagination">
			<StyledPagination
				count={size}
				shape="rounded"
				onChange={handlePageClick}
			/>
		</div>
	);
}
