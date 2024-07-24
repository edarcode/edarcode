import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";

export default function Utils() {
	return (
		<div className={css.utils}>
			<nav className={css.nav}>
				<Hyperlink href="https://imgto.xyz/">Optimizar archivos</Hyperlink>
				<Hyperlink href="https://www.svgrepo.com/">svg</Hyperlink>
				<Hyperlink href="https://svgl.app/">svg de @pheralb</Hyperlink>
				<Hyperlink href="https://console.cloudinary.com/">Cloudinary</Hyperlink>
				<Hyperlink href="https://www.prisma.io/docs/orm">Prisma ORM</Hyperlink>
				<Hyperlink href="https://manz.dev/">manzdev</Hyperlink>
				<Hyperlink href="https://midu.dev/">midudev</Hyperlink>
				<Hyperlink href="https://cursos.doriandesings.com/course/css-intermedio">
					CSS intermedio dorian
				</Hyperlink>
				<Hyperlink href="https://pagespeed.web.dev/analysis/https-edarcode-vercel-app/jub5ipnzv3?form_factor=mobile">
					Lighthouse
				</Hyperlink>
			</nav>
		</div>
	);
}
