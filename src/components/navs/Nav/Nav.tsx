import { APP_PATH } from "../../../constants/appPaths";
import LinkTo from "../../common/LinkTo/LinkTo";
import Arrow from "../../svgs/Arrow";
import Diploma from "../../svgs/Diploma";
import Folder from "../../svgs/Folder";
import Person from "../../svgs/Person";
import Resources from "../../svgs/Resources";
import Tell from "../../svgs/Tell";
import css from "./css.module.css";

export default function Nav() {
	return (
		<nav className={css.nav}>
			<Arrow />
			<LinkTo to={APP_PATH.index} icon={Person}>
				Edar
			</LinkTo>
			<LinkTo to={APP_PATH.projects} icon={Folder}>
				Proyectos
			</LinkTo>
			<LinkTo to={APP_PATH.studies} icon={Diploma}>
				Estudios
			</LinkTo>
			<LinkTo to={APP_PATH.utilities} icon={Resources}>
				Utilidades
			</LinkTo>
			<LinkTo to={APP_PATH.contact} icon={Tell}>
				Contacto
			</LinkTo>
		</nav>
	);
}
