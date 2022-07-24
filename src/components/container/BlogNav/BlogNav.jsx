import { home, projects } from "../../../constants/pathRoute";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function BlogNav() {
	return (
		<nav className={css.blog}>
			<BoxLink path={home} text="Inicio" className={css.blog__link} />
			<BoxLink path={projects} text="Proyectos" className={css.blog__link} />
		</nav>
	);
}
