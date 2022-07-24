import { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { home, projects } from "../../../constants/pathRoute";
import { IsCollapseAside } from "../../../contexts/IsCollapseAside";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function BlogNav() {
	const { isCollapseMenu, setIsCollapseMenu } = useContext(IsCollapseAside);
	const handleOnClickFabar = e => {
		setIsCollapseMenu(state => !state);
	};
	return (
		<nav className={css.blog}>
			<BoxLink path={home} text="Inicio" className={css.blog__link} />
			<BoxLink path={projects} text="Proyectos" className={css.blog__link} />
			{!isCollapseMenu && (
				<FaBars className={css.blog__fabars} onClick={handleOnClickFabar} />
			)}
			{isCollapseMenu && (
				<CgCloseO className={css.blog__fabars} onClick={handleOnClickFabar} />
			)}
		</nav>
	);
}
