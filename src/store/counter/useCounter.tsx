import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Count = {
	value: number;
	inc: () => void;
};

export const useCounter = create<Count>()(
	devtools((set, get) => ({
		value: 1,
		inc: () => {
			const { value } = get();
			set({ value: value + 1 });
		}
	}))
);
