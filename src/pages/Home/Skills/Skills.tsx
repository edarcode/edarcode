import { EDARCODE } from "../../../database/edarcode";
import css from "./css.module.css";

export default function Skills() {
	const logos = EDARCODE.skills.map(skill => (
		<li key={skill.name}>{skill.name}</li>
	));

	return (
		<article className={css.skills}>
			<h3>Habilidades</h3>
			<ul className={css.logos}>{logos}</ul>
		</article>
	);
}
