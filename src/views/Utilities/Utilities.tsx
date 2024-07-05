import Hyperlink from "../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";

export default function Utilities() {
	return (
		<div className={css.utils}>
			<nav className={css.nav}>
				<Hyperlink href="https://imgto.xyz/">Optimizar imagenes</Hyperlink>
				<Hyperlink href="https://www.svgrepo.com/">svg</Hyperlink>
			</nav>
		</div>
	);
}
