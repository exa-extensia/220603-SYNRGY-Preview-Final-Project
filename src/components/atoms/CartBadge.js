import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)({
	"& .MuiBadge-badge": {
		backgroundColor: "#A67A4A",
		color: "white",
		padding: "2px",
		borderRadius: "100%",
	},
});

export default function CartBadge() {
	const quantity = useSelector((state) => state.cart.quantity);

	return (
		<StyledBadge badgeContent={quantity}>
			<BsHandbag size={20} />
		</StyledBadge>
	);
}
