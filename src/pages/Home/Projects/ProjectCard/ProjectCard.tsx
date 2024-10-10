import { useEffect, useState } from "react";
import Btn from "../../../../components/buttons/Btn/Btn";
import Hyperlink from "../../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";
import { Props } from "./types";

export default function ProjectCard({ project }: Props) {
	const { title, description, tools, imgs } = project;
	const [isPc, setIsPc] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (!isPc) return;

		window.scrollBy({
			top: 350, // Desplaza 50px hacia abajo
			behavior: "smooth" // Añade una transición suave
		});
	}, [isPc]);

	useEffect(() => {
		if (!isMobile) return;

		window.scrollBy({
			top: 430, // Desplaza 50px hacia abajo
			behavior: "smooth" // Añade una transición suave
		});
	}, [isMobile]);

	return (
		<article className={css.project}>
			<h4 className={css.title}>{title}</h4>
			<p>{description}</p>
			<p>Tecnologías: {tools}</p>
			<Hyperlink href={project.deploy}>Deploy</Hyperlink>

			<Btn
				className={css.pc}
				onClick={() => {
					setIsMobile(false);
					setIsPc(!isPc);
				}}
			>
				PC
			</Btn>
			<Btn
				className={css.mobile}
				onClick={() => {
					setIsPc(false);
					setIsMobile(!isMobile);
				}}
			>
				Movil
			</Btn>

			{isPc && (
				<a href={imgs.pc} target="_blank">
					<img src={imgs.pc} alt={title} />
				</a>
			)}
			{isMobile && <img src={imgs.mobile} alt={title} />}
		</article>
	);
}
