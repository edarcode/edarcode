import Hyperlink from "../../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";
import { Props } from "./types";

export default function ProjectCard({ project }: Props) {
	const { title, description, tools, imgs } = project;

	return (
		<article className={css.project}>
			<div className={css.wrapperMobilePc}>
				<a href={imgs.pc} target="_blank" className={css.mobile}>
					Mobile
				</a>
				<a href={imgs.pc} target="_blank" className={css.pc}>
					PC
				</a>
			</div>

			<h4 className={css.title}>{title}</h4>
			<p>{description}</p>
			<p>Tecnologías: {tools}</p>
			<Hyperlink href={project.deploy}>Deploy</Hyperlink>
		</article>
	);
}
