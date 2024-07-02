import { BTN__ICON_KIND } from "./kinds";

export type Props = {
	className?: string;
	icon?: JSX.ElementType;
	kind?: keyof typeof BTN__ICON_KIND;
	onClick?: () => void;
	isVisible?: boolean;
};
