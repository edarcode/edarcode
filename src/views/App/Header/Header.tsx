import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";
import { Props } from "./types";

export default function Header({ className }: Props) {
	const finalClassName = joinClassNames([css.header, className]);
	return <header className={finalClassName}>header</header>;
}
