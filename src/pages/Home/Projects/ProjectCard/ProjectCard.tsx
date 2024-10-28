import { useState } from "react";
import Hyperlink from "../../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";
import { Props } from "./types";

export default function ProjectCard({ project }: Props) {
	const { title, description, tools, imgs } = project;
	const [isMobile, setIsMobile] = useState(false);
	const [isPc, setIsPc] = useState(false);

	return (
		<article className={css.project}>
			<div className={css.wrapperMobilePc}>
				<a
					className={css.mobileLink}
					href={imgs.mobile}
					target="_blank"
					onMouseOver={() => setIsMobile(true)}
					onMouseLeave={() => setIsMobile(false)}
				>
					Mobile
				</a>
				<a
					className={css.pcLink}
					href={imgs.pc}
					target="_blank"
					onMouseOver={() => setIsPc(true)}
					onMouseLeave={() => setIsPc(false)}
				>
					PC
				</a>
			</div>

			{isMobile && (
				<img className={css.mobileImg} src={imgs.mobile} alt={title} />
			)}

			{isPc && <img className={css.pcImg} src={imgs.pc} alt={title} />}

			<h4 className={css.title}>{title}</h4>
			<h5 className={css.dev}>{project.dev}</h5>
			<p>{description}</p>
			<p>Tecnologías: {tools}</p>
			{project.deploy && <Hyperlink href={project.deploy}>Sitio web</Hyperlink>}
		</article>
	);
}
