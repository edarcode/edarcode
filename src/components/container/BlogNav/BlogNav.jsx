import { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { home, projects } from "../../../constants/pathRoute";
import { IsCollapseAside } from "../../../contexts/IsCollapseAside";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

const prohibitedRoutes = ["/", "/projects"];

export default function BlogNav() {
	const { pathname } = useLocation();
	const { isCollapseMenu, setIsCollapseMenu } = useContext(IsCollapseAside);

	const handleOnClickFabar = e => {
		setIsCollapseMenu(state => !state);
	};

	return (
		<nav className={css.blog}>
			<BoxLink path={home} text="Inicio" className={css.blog__link} />
			<BoxLink path={projects} text="Proyectos" className={css.blog__link} />
			{!isCollapseMenu && !prohibitedRoutes.includes(pathname) && (
				<FaBars className={css.blog__fabars} onClick={handleOnClickFabar} />
			)}
			{isCollapseMenu && !prohibitedRoutes.includes(pathname) && (
				<CgCloseO className={css.blog__fabars} onClick={handleOnClickFabar} />
			)}
		</nav>
	);
}
