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
				<Hyperlink href="https://pagespeed.web.dev">Lighthouse</Hyperlink>
				<Hyperlink href="https://www.freepik.es/">Img gratis</Hyperlink>
				<Hyperlink href="https://www.drawdb.app/">Diagramas db</Hyperlink>
				<Hyperlink href="https://drizzle.run/visualizer">
					Diagramas db drizzle
				</Hyperlink>
				<Hyperlink href="https://number-conversion-tau.vercel.app/">
					Conversor de números (edarcode)
				</Hyperlink>
				<Hyperlink href="https://calculator-ten-khaki-94.vercel.app/">
					Calculadora (edarcode)
				</Hyperlink>
				<Hyperlink href="https://kitsu.io/api/edge">Kitsu API</Hyperlink>
				<Hyperlink href="https://animanga.es/">Animanga</Hyperlink>
				<Hyperlink href="https://ideogram.ai/">Gerador de img (IA)</Hyperlink>
			</nav>
		</div>
	);
}
