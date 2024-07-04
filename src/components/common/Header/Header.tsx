import { joinClassNames } from "../../../utils/joinClassNames";
import Nav from "../../navs/Nav/Nav";
import Networks from "../Networks/Networks";
import css from "./css.module.css";
import { Props } from "./types";

export default function Header({ className }: Props) {
	const finalClassName = joinClassNames([css.header, className]);
	return (
		<header className={finalClassName}>
			<Networks />
			<Nav />
		</header>
	);
}
