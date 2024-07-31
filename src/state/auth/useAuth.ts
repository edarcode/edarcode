import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";

type Auth = {
	token: null | string;
	name: null | string;
	role: null | Role;
	removeAuth: () => void;
	updateAuth: (token: string) => void;
};

export const useAuth = create<Auth>()(
	devtools(
		set => ({
			token: null,
			name: null,
			role: null,
			removeAuth: () => {
				set({ token: null, name: null, role: null });
				localStorage.removeItem("token");
			},
			updateAuth: token => {
				const infoToken = jwtDecode(token) as InfoToken;
				console.log(infoToken);
				set({ token, name: infoToken.name, role: infoToken.role });
				localStorage.setItem("token", token);
			}
		}),
		{ name: "auth" }
	)
);

type InfoToken = { name: string; role: Role };
type Role = "ADMIN" | "BOSS" | "CLIENT";
