import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { refreshTokenService } from "./services/refreshTokenService";

type Auth = {
	token: null | string;
	name: null | string;
	role: null | Role;
	removeAuth: () => void;
	updateAuth: (token: string) => void;
	refreshAuth: () => void;
};

export const useAuth = create<Auth>()(
	devtools(
		(set, get) => ({
			token: null,
			name: null,
			role: null,
			removeAuth: () => {
				set({ token: null, name: null, role: null });
				localStorage.removeItem("token");
			},
			updateAuth: token => {
				const infoToken = jwtDecode(token) as InfoToken;
				set({ token, name: infoToken.name, role: infoToken.role });
				localStorage.setItem("token", token);
			},
			refreshAuth: async () => {
				const { updateAuth } = get();
				const token = localStorage.getItem("token");
				if (!token) return;

				const infoToken = jwtDecode(token) as InfoToken;
				const iat = infoToken.iat;
				const currentTime = Math.floor(Date.now() / 1000);
				const oneDaysInSeconds = 2 * 24 * 60 * 60;
				const isTimeToRefresh = currentTime - iat > oneDaysInSeconds;

				if (!isTimeToRefresh) return updateAuth(token);

				try {
					const res = await refreshTokenService(token);
					const newToken = res.token as string;
					updateAuth(newToken);
				} catch (error) {
					const { removeAuth } = get();
					removeAuth();
				}
			}
		}),
		{ name: "auth" }
	)
);

type InfoToken = { name: string; role: Role; iat: number };
type Role = "ADMIN" | "BOSS" | "CLIENT";
