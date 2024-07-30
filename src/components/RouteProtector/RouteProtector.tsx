import { Navigate } from "react-router-dom";
import { useAuth } from "../../state/auth/useAuth";

type Props = {
	children: React.ReactNode;
};

export default function RouteProtector({ children }: Props) {
	const isAuthenticated = useAuth(auth => auth.token);

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}
	return children;
}
