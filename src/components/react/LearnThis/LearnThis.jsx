import LearnThisAcademy from "../../svgs/LearnThisAcademy";
import css from "./style.module.css";

export default function LearnThis() {
	return (
		<div className={css.learn}>
			<p>
				Los artículos siguen el curso de React en Learn This Academy. Echale un
				👀 a su sitio web, te van a encantar todos sus cursos. Calidad
				garantizada 👌
				<a
					href="https://learnthisacademy.com/"
					target="_blank"
					rel="noreferrer"
				>
					<LearnThisAcademy />
				</a>
			</p>
		</div>
	);
}
