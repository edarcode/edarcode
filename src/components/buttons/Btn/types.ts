import { BTN__KIND } from "./kinds";

export type Props = {
	className?: string;
	kind?: keyof typeof BTN__KIND;
	onClick?: () => void;
	isVisible?: boolean;
	children?: string;
};
