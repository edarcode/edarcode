import css from "./style.module.css";

export default function NotFound() {
	return (
		<div className={css.not}>
			<p className={css.not__text}>Upps! aun no está lista esta web 😱</p>
		</div>
	);
}
