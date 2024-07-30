import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Auth = {
	token: null | string;
	name: null | string;
	removeToken: () => void;
	updateToken: (auth: { token: string; name: string }) => void;
};

export const useAuth = create<Auth>()(
	devtools(
		set => ({
			token: null,
			name: null,
			removeToken: () => {
				set({ token: null, name: null });
				localStorage.removeItem("auth");
			},
			updateToken: auth => {
				set({ token: auth.token, name: auth.name });
				const newAuth = JSON.stringify(auth);
				console.log(newAuth);
				localStorage.setItem("auth", newAuth);
			}
		}),
		{ name: "auth" }
	)
);
