import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { logout, reset } from "../redux/auth/authSlice";

export default function ProtectedRoute() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (user) {
			if (user.exp < Date.now() / 1000) {
				dispatch(logout());
				dispatch(reset());
			}
		}
	}, [dispatch, user]);

	if (!user) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
}
