import css from "./css.module.css";
import { joinClassNames } from "./joinClassNames";
import { BTN__KIND } from "./kinds";
import { Props } from "./types";

export default function Btn(props: Props) {
	const { className, kind, onClick, isVisible = true, children } = props;

	const finalClassNameBtn = joinClassNames([
		css.btn,
		BTN__KIND[kind ?? "primary"],
		className
	]);

	if (!isVisible) return null;

	return (
		<button {...props} onClick={onClick} className={finalClassNameBtn}>
			{children}
		</button>
	);
}
