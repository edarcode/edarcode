import css from "./style.module.css";

export default function WhatIsDom() {
	return (
		<article className={css.article}>
			<header className={css.article__header}>
				<h1 className={css.article__title}>¿Qué es el DOM? 🌳</h1>
				<p>
					<strong>DOM</strong> (Document Object Model) estructura del documento
					HTML. Una web está formada por múltiples{" "}
					<strong>Etiquetas HTML</strong>, anidadas una dentro de otra, formando
					un <strong>Árbol de etiquetas</strong> relacionadas entre sí, que se
					denomina <strong>DOM.</strong>
				</p>
				<p>
					Con Javascript podemos poner el <strong>DOM</strong> patas arriba de
					forma dinámica 🤭; ya sea añadiendo, modificando, eliminando
					etiquetas, cambiando sus atributos, su contenido, etc...
				</p>
				<p>
					Al estar &quot;amparados&quot; por un lenguaje de programación, todas
					estas tareas se pueden automatizar, incluso indicando que se realicen
					cuando el usuario interactúe con la web, como por ejemplo: haciendo
					click en una parte del documento, mover el ratón, escribir un texto,
					etc...
				</p>
			</header>
			<section className={css.article__document}>
				<h2>El objeto document</h2>
				<p>
					En Javascript, la forma de acceder al DOM es a través del objeto
					document, que representa el DOM de la página. En su interior pueden
					existir varios tipos de elementos, pero principalmente serán{" "}
					<strong>Element</strong> o <strong>Node</strong> :
				</p>
				<ul>
					<li>
						<strong>Element:</strong> Representación genérica de una etiqueta{" "}
						<strong>HTMLElement</strong>.
					</li>
					<li>
						<strong>Node:</strong> Es una unidad más básica, la cuál puede ser{" "}
						<strong>Element</strong> o un <strong>Nodo de texto</strong>.
					</li>
				</ul>
				<p>
					Todos los elementos HTML, dependiendo del elemento que sean, tendrán
					un tipo de dato específico. Algunos ejemplos:
				</p>
			</section>
			<table className={css.article__table}>
				<thead>
					<tr>
						<th>Tipo de dato</th>
						<th>Tipo específico</th>
						<th>Etiqueta</th>
						<th>Descripción</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<strong>HTMLElement</strong>
						</td>
						<td>
							<strong>HTMLDivElement</strong>
						</td>
						<td>
							<strong>&#60;div&#62;</strong>
						</td>
						<td>Capa divisoria invisible (en bloque)</td>
					</tr>
					<tr>
						<td>
							<strong>HTMLElement</strong>
						</td>
						<td>
							<strong>HTMLSpanElement</strong>
						</td>
						<td>
							<strong>&#60;span&#62;</strong>
						</td>
						<td>Capa divisoria invisible (en línea)</td>
					</tr>
					<tr>
						<td>
							<strong>HTMLElement</strong>
						</td>
						<td>
							<strong>HTMLImageElement</strong>
						</td>
						<td>
							<strong>&#60;img&#62;</strong>
						</td>
						<td>Imagen</td>
					</tr>
					<tr>
						<td>
							<strong>HTMLElement</strong>
						</td>
						<td>
							<strong>HTMLAudioElement</strong>
						</td>
						<td>
							<strong>&#60;audio&#62;</strong>
						</td>
						<td>Contenedor de audio</td>
					</tr>
				</tbody>
			</table>
			<section>
				<h2>API nativa de Javascript </h2>
				<p>
					Javascript nos proporciona un conjunto de funciones para trabajar de
					forma nativa con el DOM. Las cuales veremos en los próximos artículos
				</p>
			</section>
		</article>
	);
}
