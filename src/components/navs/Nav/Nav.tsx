import { APP_PATH } from "../../../constants/appPaths";
import { joinClassNames } from "../../../utils/joinClassNames";
import LinkTo from "../../common/LinkTo/LinkTo";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Nav({ className }: Props) {
	const finalClassName = joinClassNames([css.nav, className]);
	return (
		<nav className={finalClassName}>
			<LinkTo to={APP_PATH.index}>Edar</LinkTo>

			<LinkTo to={APP_PATH.projects}>Proyectos</LinkTo>

			<LinkTo to={APP_PATH.studies}>Estudios</LinkTo>

			<LinkTo to={APP_PATH.utilities}>Utilidades</LinkTo>

			<LinkTo to={APP_PATH.contact}>Contacto</LinkTo>
		</nav>
	);
}
