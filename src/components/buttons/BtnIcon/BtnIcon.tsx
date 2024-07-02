import { joinClassNames } from "../../../utils/joinClassNames.js";
import Cross from "./Cross.js";
import css from "./css.module.css";
import { BTN__ICON_KIND } from "./kinds.js";
import { Props } from "./types.js";

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
