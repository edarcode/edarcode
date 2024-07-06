import Hyperlink from "../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";

export default function Utilities() {
	return (
		<div className={css.utils}>
			<nav className={css.nav}>
				<Hyperlink href="https://imgto.xyz/">Optimizar archivos</Hyperlink>
				<Hyperlink href="https://www.svgrepo.com/">svg</Hyperlink>
				<Hyperlink href="https://svgl.app/">svg de @pheralb</Hyperlink>
				<Hyperlink href="https://console.cloudinary.com/">Cloudinary</Hyperlink>
				<Hyperlink href="https://www.prisma.io/docs/orm">Prisma ORM</Hyperlink>
			</nav>
		</div>
	);
}
