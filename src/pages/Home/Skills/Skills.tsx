import { EDARCODE } from "../../../database/edarcode";
import css from "./css.module.css";

export default function Skills() {
	const logos = EDARCODE.skills.map(skill => (
		<a
			key={skill.name}
			href={skill.doc}
			target="_blank"
			rel="noopener noreferrer"
		>
			<li>{skill.name}</li>
		</a>
	));

	return (
		<article className={css.skills}>
			<h3>Habilidades</h3>
			<ul className={css.logos}>{logos}</ul>
		</article>
	);
}
