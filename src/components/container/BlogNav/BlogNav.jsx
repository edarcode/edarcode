import { useContext } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { home } from "../../../constants/path-routes.js/home.js";
import { projects } from "../../../constants/path-routes.js/project.js";

import { IsCollapseAside } from "../../../contexts/IsCollapseAside";

import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

const prohibitedRoutes = ["/", "/projects"];

export default function BlogNav({ className }) {
	const { pathname } = useLocation();
	const { isCollapseMenu, setIsCollapseMenu } = useContext(IsCollapseAside);

	const handleOnClickFabar = e => {
		setIsCollapseMenu(state => !state);
	};

	return (
		<nav className={`${css.blog} ${className || ""}`}>
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
