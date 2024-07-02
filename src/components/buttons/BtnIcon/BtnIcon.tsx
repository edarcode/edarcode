import { joinClassNames } from "../../../utils/joinClassNames.js";
import Cross from "./Cross.js";
import css from "./css.module.css";
import { BTN__ICON_KIND } from "./kinds.js";

type Props = {
	className?: string;
	icon?: JSX.ElementType;
	kind?: keyof typeof BTN__ICON_KIND;
};

export default function BtnIcon({ className, icon, kind, ...props }: Props) {
	const Icon = icon || Cross;
	const finalClassNameBtn = joinClassNames([
		css.btn,
		BTN__ICON_KIND[kind ?? "yellow"],
		className
	]);

	return (
		<button {...props} className={finalClassNameBtn}>
			<Icon />
		</button>
	);
}
