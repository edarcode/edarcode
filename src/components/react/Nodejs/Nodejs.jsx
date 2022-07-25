import css from "./style.module.css";

export default function Nodejs() {
	return (
		<article className="article">
			<h1 className={css.title}>
				Nodejs <img src="/svgs/node.svg" alt="nodejs" />
			</h1>
			<p>
				Es necesario tener instalado nodejs junto a su gestor de paquetes npm
				(puede usar yarn sin problema). Nodejs permite crear un servidor web y
				además ejecutar scripts en js, necesarios para algunas utilidades de
				c/proyecto.
			</p>
			<a
				className="url"
				href="https://nodejs.org/es/"
				target={"_blank"}
				rel="noreferrer"
			>
				Sitio oficial Nodejs
			</a>
		</article>
	);
}
