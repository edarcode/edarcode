import { useState } from "react";
import { joinClassNames } from "../../../utils/joinClassNames";
import BtnNav from "../../buttons/BtnNav/BtnNav";
import Nav from "../../navs/Nav/Nav";
import Networks from "../Networks/Networks";
import css from "./css.module.css";
import { Props } from "./types";

export default function Header({ className }: Props) {
	const [isVisible, setIsVisible] = useState(false); // hace ref al nav

	const finalClassName = joinClassNames([css.header, className]);
	const finalClassNameNav = joinClassNames([css.nav, isVisible && css.expand]);
	const finalClassNameBtn = joinClassNames([css.btn, isVisible && css.expand]);

	const hVisible = () => setIsVisible(!isVisible);

	return (
		<header className={finalClassName}>
			<Networks className={css.networks} />
			<BtnNav className={finalClassNameBtn} onClick={hVisible} />
			<Nav className={finalClassNameNav} onClickLinks={hVisible} />
		</header>
	);
}
