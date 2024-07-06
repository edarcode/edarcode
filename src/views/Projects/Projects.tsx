import Project from "../../components/cards/Project";
import { EDARCODE } from "../../constants/edarcode";
import css from "./css.module.css";

export default function Projects() {
	EDARCODE;
	return (
		<section className={css.projects}>
			<Project project={EDARCODE.projects[0]} />
		</section>
	);
}
