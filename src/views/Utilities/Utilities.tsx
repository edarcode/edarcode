import Hyperlink from "../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";

export default function Utilities() {
	return (
		<div className={css.utils}>
			<h1>Recursos</h1>
			<nav className={css.nav}>
				<Hyperlink href="https://imgto.xyz/">Optimizar archivos</Hyperlink>
				<Hyperlink href="https://www.svgrepo.com/">svg</Hyperlink>
				<Hyperlink href="https://svgl.app/">svg de @pheralb</Hyperlink>
			</nav>
		</div>
	);
}
