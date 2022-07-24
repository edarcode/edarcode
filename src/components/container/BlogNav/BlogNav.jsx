import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { home, projects } from "../../../constants/pathRoute";
import { IsCollapseAside } from "../../../contexts/IsCollapseAside";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function BlogNav() {
	const { setIsCollapseMenu } = useContext(IsCollapseAside);
	return (
		<nav className={css.blog}>
			<BoxLink path={home} text="Inicio" className={css.blog__link} />
			<BoxLink path={projects} text="Proyectos" className={css.blog__link} />
			<FaBars
				className={css.blog__fabars}
				onClick={() => setIsCollapseMenu(state => !state)}
			/>
		</nav>
	);
}
