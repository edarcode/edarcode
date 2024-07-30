import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Auth = {
	token: null | string;
	removeToken: () => void;
	updateToken: (token: string) => void;
};

export const useAuth = create<Auth>()(
	devtools(
		set => ({
			token: null,
			removeToken: () => {
				set({ token: null });
				localStorage.removeItem("auth");
			},
			updateToken: token => {
				set({ token });
				localStorage.setItem("auth", token);
			}
		}),
		{ name: "auth" }
	)
);
