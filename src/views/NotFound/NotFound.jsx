import css from "./style.module.css";

export default function NotFound() {
	return (
		<div className={css.not}>
			<p className={css.not__text}>Upps! no existe esta ruta 😱</p>
		</div>
	);
}
