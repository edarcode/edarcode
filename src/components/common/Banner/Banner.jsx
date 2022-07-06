import css from "./style.module.css";

export default function Banner() {
	return (
		<div className={css.banner}>
			<img className={css.banner__img} src="/edarko.png" alt="edarcode" />
			<div className={css.banner__name}>
				{renderSpanByChar("edarcode", css.banner__char)}
			</div>
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
