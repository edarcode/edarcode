import { joinClassNames } from "../../../utils/joinClassNames.js";
import Cross from "./Cross.js";
import css from "./css.module.css";
import { BTN__ICON_KIND } from "./kinds.js";
import { Props } from "./types.js";

export default function BtnIcon({
	className,
	icon,
	kind,
	onClick,
	isVisible = true,
	...props
}: Props) {
	const Icon = icon || Cross;
	const finalClassNameBtn = joinClassNames([
		css.btn,
		BTN__ICON_KIND[kind ?? "red"],
		className
	]);

	if (!isVisible) return null;

	return (
		<button {...props} onClick={onClick} className={finalClassNameBtn}>
			<Icon />
		</button>
	);
}
