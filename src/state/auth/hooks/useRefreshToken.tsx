import { useEffect } from "react";
import { useAuth } from "../useAuth";

export const useRefreshToken = () => {
	const refreshAuth = useAuth(auth => auth.refreshAuth);

	useEffect(() => {
		refreshAuth();
	}, []);
};
