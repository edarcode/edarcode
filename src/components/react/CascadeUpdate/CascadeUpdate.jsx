export default function CascadeUpdate() {
	return (
		<article className="article">
			<h1>Cascade Update</h1>
			<p>
				Un último problema que presentaban con su antiguo sistema de plantillas
				es que a pesar de ser capaz de realizar cambios sobre las vistas de
				forma dinámica, cada cambio suponía una cascada de cambios
				incontrolable.
			</p>
			<p>
				Un cambio en las variables de una plantilla (dar clic en un botón)
				implicaba un re-render de toda la plantilla, además, una plantilla podía
				estar formada por mas plantillas y tocaba re-cargarlas también, por lo
				que implicaba un costo enorme para una tarea a priori sencilla. Incluso
				se presentaban situaciones en las que una plantilla se recargaba varias
				veces con 1 sola acción y esto evidentemente era muy ineficiente.
			</p>
			<h2>Objetivo</h2>
			<p>
				Evitar actualizaciones en cascada agrupando todas en 1 sola
				actualización y optimizar todas esas actualizaciones realizando el
				mínimo número de cambios posibles.
			</p>
			<p>
				Si delegaban esto al desarrollador de forma imperativa, cada componente
				debía ser optimizado al máximo y si dicho componente estaba relacionado
				con otro debía realizarse una optimización del comportamiento de ambos
				cuando funcionaban juntos, es decir, todo un sacrilegio 😱.
			</p>
			<p>
				Se necesitaba un algoritmo que automatizara dicho sacrilegio, y de
				hecho, es el núcleo del 👑 React. El algoritmo basa su funcionamiento en
				una estructura de datos llamada{" "}
				<span className="special_word">Virtual DOM 🤗.</span>
			</p>
		</article>
	);
}
