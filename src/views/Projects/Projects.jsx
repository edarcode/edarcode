import Project from "../../components/container/Project/Project";
import { projects } from "../../data/projects";
import css from "./style.module.css";

export default function Projects() {
	return (
		<main className={css.projects}>
			{projects.map(item => (
				<Project key={item.name} {...item} />
			))}
		</main>
	);
}
