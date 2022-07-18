import css from "./style.module.css";

export default function Banner() {
	return (
		<div className={css.banner}>
			<div className={css.banner__name}>
				{renderSpanByChar("edarcode", css.banner__char)}
			</div>
			<img className={css.banner__img} src="/edarko.png" alt="edarcode" />
			<p>
				<strong className={css.banner__love}>Amo programar,</strong> trabajar en
				equipo, crear contenido y enseñar lo que voy aprendiendo.
			</p>
		</div>
	);
}

function renderSpanByChar(text, className) {
	const textArr = text.split("");
	return textArr.map((item, index) => (
		<span className={className} key={index}>
			{item}
		</span>
	));
}
