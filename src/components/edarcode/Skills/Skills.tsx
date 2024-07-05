import { EDARCODE } from "../../../constants/edarcode";
import css from "./css.module.css";

export default function Skills() {
	const logos = EDARCODE.Skills.map(skill => (
		<img
			key={skill.name}
			className={css.logo}
			src={skill.url}
			alt={skill.name}
		/>
	));

	return (
		<article className={css.skills}>
			<h3>Habilidades</h3>
			<div className={css.logos}>{logos}</div>
		</article>
	);
}
