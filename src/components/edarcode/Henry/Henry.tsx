import css from "./css.module.css";

export default function Henry() {
	return (
		<article className={css.henry}>
			<img src="/education/henry.svg" alt="henry" />
			<p>Bootcamp 800 horas teórico-practica www.soyhenry.com</p>
			<img
				className={css.certificate}
				src="/education/henry-certificate.avif"
				alt="certificado henry"
			/>
		</article>
	);
}
