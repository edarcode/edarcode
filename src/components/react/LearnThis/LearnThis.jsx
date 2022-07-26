import LearnThisAcademy from "../../svgs/LearnThisAcademy";
import css from "./style.module.css";

export default function LearnThis() {
	return (
		<div className={css.learn}>
			<p>
				Los artículos siguen el curso de React en LearnThis Academy. Academia
				creada por y para desarrolladores. El lugar perfecto para formarnos.
				<a
					href="https://learnthisacademy.com/"
					target="_blank"
					rel="noreferrer"
				>
					<LearnThisAcademy />
				</a>
				👣
			</p>
		</div>
	);
}
