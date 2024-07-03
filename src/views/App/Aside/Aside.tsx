import LinkTo from "../../../components/common/LinkTo/LinkTo";
import { APP_PATH } from "../../../constants/appPaths";
import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Aside({ className }: Props) {
	const finalClassName = joinClassNames([css.aside, className]);

	return (
		<aside className={finalClassName}>
			<nav className={css.nav}>
				<LinkTo to={APP_PATH.index}>Sobre mi</LinkTo>
				<LinkTo to={APP_PATH.projects}>Proyectos</LinkTo>
				<LinkTo to={APP_PATH.studies}>Estudios</LinkTo>
				<LinkTo to={APP_PATH.utilities}>Utilidades</LinkTo>
				<LinkTo to={APP_PATH.contact}>Contacto</LinkTo>
			</nav>
		</aside>
	);
}
