import Hyperlink from "../../links/Hyperlink/Hyperlink";
import css from "./css.module.css";

export default function Henry() {
	return (
		<article className={css.henry}>
			<img src="/education/henry.svg" alt="henry" />
			<p>
				Bootcamp 800 horas teórico-practica{" "}
				<Hyperlink href="https://www.soyhenry.com">Henry</Hyperlink>
			</p>
			<img
				className={css.certificate}
				src="https://res.cloudinary.com/dvmsllkkg/image/upload/v1720284668/edarcode/henry-certificate.avif"
				alt="certificado henry"
			/>
		</article>
	);
}
