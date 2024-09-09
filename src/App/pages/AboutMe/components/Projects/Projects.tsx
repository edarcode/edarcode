import { EDARCODE } from "../../../../../constants/edarcode";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import css from "./css.module.css";

export default function Projects() {
	EDARCODE;
	return (
		<section>
			<h3>Proyectos</h3>
			<div className={css.projects}>
				<ProjectCard project={EDARCODE.projects[0]} />
				<ProjectCard project={EDARCODE.projects[1]} />
			</div>
		</section>
	);
}
