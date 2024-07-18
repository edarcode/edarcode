import LinkTo from "../../../../../components/links/LinkTo/LinkTo";
import { joinClassNames } from "../../../../../services/joinClassNames";
import { PAGES } from "../../../../router";

import css from "./css.module.css";
import { Props } from "./types";

export default function Nav({
	className,
	isVisible,
	id,
	role,
	onClickLinks
}: Props) {
	const finalClassName = joinClassNames([
		css.nav,
		isVisible && css.expand,
		className
	]);

	const links = PAGES.map(page => (
		<LinkTo key={page.id} to={page.path} onClick={onClickLinks}>
			{page.name}
		</LinkTo>
	));

	return (
		<nav id={id} role={role} className={finalClassName}>
			{links}
		</nav>
	);
}
