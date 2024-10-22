import Hyperlink from "../../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";

export default function Henry() {
	return (
		<article className={css.henry}>
			<p>
				Bootcamp 800 horas teórico-practica{" "}
				<Hyperlink href="https://www.soyhenry.com">Henry</Hyperlink>
			</p>
		</article>
	);
}
