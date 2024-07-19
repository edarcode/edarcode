import css from "./css.module.css";
import { joinClassNames } from "./joinClassNames";
import { BTN__KIND } from "./kinds";
import { Props } from "./types";

export default function Btn(props: Props) {
	const { isVisible = true, kind, className, ...extraProps } = props;

	const finalClassNameBtn = joinClassNames([
		css.btn,
		BTN__KIND[kind ?? "primary"],
		className
	]);

	if (!isVisible) return null;
	return <button {...extraProps} className={finalClassNameBtn}></button>;
}
