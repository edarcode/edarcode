import LinkTo from "../../components/common/LinkTo/LinkTo";
import { APP, CONTACT, PROJECTS, STUDIES, UTILS } from "../../constants/paths";
import { joinClassNames } from "../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Aside({ className }: Props) {
	const finalClassName = joinClassNames([css.aside, className]);

	return (
		<aside className={finalClassName}>
			<nav className={css.nav}>
				<LinkTo to={APP}>Inicio</LinkTo>
				<LinkTo to={PROJECTS}>Proyectos</LinkTo>
				<LinkTo to={STUDIES}>Estudios</LinkTo>
				<LinkTo to={UTILS}>Utilidades</LinkTo>
				<LinkTo to={CONTACT}>Contacto</LinkTo>
			</nav>
		</aside>
	);
}
