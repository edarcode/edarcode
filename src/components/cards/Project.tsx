import Hyperlink from "../links/Hyperlink/Hyperlink";
import css from "./css.module.css";
import { Props } from "./types";

export default function Project({ project }: Props) {
	const { title, description, tools, deploy } = project;
	return (
		<article className={css.project}>
			<h4 className={css.title}>{title}</h4>
			<p>{description}</p>
			<p>Tecnologías: {tools}</p>
			<Hyperlink href={deploy}>Sitio web</Hyperlink>
		</article>
	);
}
