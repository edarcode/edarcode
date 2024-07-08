import { APP_PATH } from "../../../constants/appPaths";
import { joinClassNames } from "../../../utils/joinClassNames";
import LinkTo from "../../links/LinkTo/LinkTo";
import css from "./css.module.css";

type Props = {
	className?: string;
	onClickLinks?: () => void;
	id?: string;
	role?: string;
	isVisible?: boolean;
};

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
			<LinkTo to={APP_PATH.index} onClick={onClickLinks}>
				Edar
			</LinkTo>

			<LinkTo to={APP_PATH.education} onClick={onClickLinks}>
				Estudios
			</LinkTo>

			<LinkTo to={APP_PATH.utilities} onClick={onClickLinks}>
				Utilidades
			</LinkTo>
		</nav>
	);
}
