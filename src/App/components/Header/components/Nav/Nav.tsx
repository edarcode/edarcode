import LinkTo from "../../../../../components/links/LinkTo/LinkTo";
import { joinClassNames } from "../../../../../services/joinClassNames";
import { PATH } from "../../../../router";
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
	return (
		<nav id={id} role={role} className={finalClassName}>
			<LinkTo to={PATH.App} onClick={onClickLinks}>
				Edar
			</LinkTo>

			<LinkTo to={PATH.Education} onClick={onClickLinks}>
				Estudios
			</LinkTo>

			<LinkTo to={PATH.Utils} onClick={onClickLinks}>
				Utilidades
			</LinkTo>

			<LinkTo to={PATH.Test} onClick={onClickLinks}>
				Test
			</LinkTo>
		</nav>
	);
}
