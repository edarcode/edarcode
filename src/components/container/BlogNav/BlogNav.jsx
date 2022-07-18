import { home, projects } from "../../../constants/path";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function BlogNav() {
	return (
		<nav className={css.blog}>
			<BoxLink path={home} text="Inicio" className={css.blog__link} />
			<BoxLink path={projects} text="Proyectos" className={css.blog__link} />
			{/* <BoxLink path={streams} text="Streams" className={css.blog__link} />
			<BoxLink path={help} text="Ayuda" className={css.blog__link} />
			<BoxLink path={assets} text="Assets" className={css.blog__link} />
			<BoxLink path={setup} text="Setup" className={css.blog__link} />
			<BoxLink path={software} text="Software" className={css.blog__link} />
			<BoxLink path={FAQ} text="FAQ" className={css.blog__link} /> */}
		</nav>
	);
}
