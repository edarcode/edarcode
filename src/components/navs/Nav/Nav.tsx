import { APP_PATH } from "../../../constants/appPaths";
import { joinClassNames } from "../../../utils/joinClassNames";
import LinkTo from "../../links/LinkTo/LinkTo";
import css from "./css.module.css";

type Props = {
	className?: string;
	onClickLinks?: () => void;
};

export default function Nav({ className, onClickLinks }: Props) {
	const finalClassName = joinClassNames([css.nav, className]);
	return (
		<nav className={finalClassName}>
			<LinkTo to={APP_PATH.index} onClick={onClickLinks}>
				Edar
			</LinkTo>

			<LinkTo to={APP_PATH.projects} onClick={onClickLinks}>
				Proyectos
			</LinkTo>

			<LinkTo to={APP_PATH.studies} onClick={onClickLinks}>
				Estudios
			</LinkTo>

			<LinkTo to={APP_PATH.utilities} onClick={onClickLinks}>
				Utilidades
			</LinkTo>
		</nav>
	);
}