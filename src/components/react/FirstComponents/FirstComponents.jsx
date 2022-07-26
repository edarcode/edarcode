export default function FirstComponents() {
	return (
		<article className="article">
			<h1>Primeros componentes</h1>
			<p>
				Antes de 2011 el sitio web de Facebook utilizaba el stack HTML, CSS Y JS
				para desarrollo en cliente y PHP para desarrollo en servidor. Al pasar
				el tiempo se notó que gran parte del code de una web se reutilizaba en
				otra, una web no son mas que cajas apiladas y armarla es muy similar a
				jugar con legos.
			</p>
			<p>
				Para favorecer la reutilización de code en cliente y servidor se optó
				por usar un sistema de platillas, esto permitía fragmentar Vistas y en
				base a los mismos fragmentos crear nuevas Vistas.
			</p>
			<p>
				Cada plantilla no era mas que un método que retornaba un HTML, CSS Y JS
				en función de ciertos parámetros. Para armar dicha plantilla usaron
				strings, concatenaban lo necesario para al final obtener algo como esto:
			</p>
			<img src="/react/why_react/template_string.webp" alt="template strings" />
			<p>
				El problema es que era sumamente frágil, era complejo combinarlo con
				otras platillas y complejo de leer.
			</p>
			<img
				src="/react/why_react/template_string_fail.webp"
				alt="template strings frágil"
			/>
			<p>
				Por tanto buscaron una alternativa mas cómoda y potente, crearon XHP
				(XML + PHP). Es una sintaxis similar a HTML, pero que permitía manipular
				etiquetas como si fueran variables y crear fragmentos (componentes) a
				partir de otros fragmentos.
			</p>
			<img src="/react/why_react/xhp.webp" alt="xhp" />
			<p className="quote">
				Pero si tenia todo lo que se deseaba ¿Cual era el problema ahora? esto
				en si era PHP y lamentablemente solo funcionaba en servidor 😞.
			</p>
		</article>
	);
}
