import { useState } from "react";
import LinkTo from "../../../components/common/LinkTo/LinkTo";
import Arrow from "../../../components/svgs/Arrow";
import Diploma from "../../../components/svgs/Diploma";
import Folder from "../../../components/svgs/Folder";
import Tell from "../../../components/svgs/Tell";
import Tools from "../../../components/svgs/Tools";
import { APP_PATH } from "../../../constants/appPaths";
import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Aside({ className }: Props) {
	const [isCollapsed, setIsCollapsed] = useState(true); // decide si está collapsado el aside

	const finalClassName = joinClassNames([css.aside, className]);

	const finalClassNameArrow = joinClassNames([
		css.arrow,
		!isCollapsed && css.arrow_rotate
	]);

	return (
		<aside className={finalClassName}>
			<Arrow
				className={finalClassNameArrow}
				onClick={() => setIsCollapsed(!isCollapsed)}
			/>
			<nav className={css.nav}>
				<LinkTo to={APP_PATH.index}>{!isCollapsed && "Sobre mi"}</LinkTo>
				<LinkTo to={APP_PATH.projects} icon={Folder}>
					{!isCollapsed && "Proyectos"}
				</LinkTo>
				<LinkTo to={APP_PATH.studies} icon={Diploma}>
					{!isCollapsed && "Estudios"}
				</LinkTo>
				<LinkTo to={APP_PATH.utilities} icon={Tools}>
					{!isCollapsed && "Utilidades"}
				</LinkTo>
				<LinkTo to={APP_PATH.contact} icon={Tell}>
					{!isCollapsed && "Contacto"}
				</LinkTo>
			</nav>
		</aside>
	);
}
