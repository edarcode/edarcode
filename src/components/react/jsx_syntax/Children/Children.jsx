export default function Children() {
	return (
		<article className="article">
			<h1>Prop children</h1>
			<p>
				Entre las etiquetas de apertura y cierre de un Nodo, puede colocar
				tantas etiquetas como desee (childre).
			</p>
			<img src="/react/jsx_syntax/childrens.webp" alt="hijos de una etiqueta" />
			<p>
				NO hay gran diferencia con HTML, pero JSX en realidad es un sistema de
				plantillas, por lo que podemos incluir expresiones evaluables dentro de
				cada etiqueta.
			</p>
			<img
				src="/react/jsx_syntax/expresions_jsx.webp"
				alt="expresiones evaluables en jsx"
			/>
			<p>
				Note que se debe indicar con{" "}
				<span className="special_word">{"{ }"}</span> que se va a incrustar
				Javascript 🤗. Veamos que tiene app en sus props.
			</p>
			<img src="/react/jsx_syntax/array_children.webp" alt="array children" />
			<p>
				Children no es mas que un array, y en cada posición, tiene c/u de los
				hijos de la etiqueta que se está consologueando (app), y si sigue
				adentrándose en la cadena, verá que se repite el ciclo para las
				etiquetas hijas de app.
			</p>
			<p>
				Existen valores que se terminan rende-rizando en un string vacío, es
				decir, en nada (null, undefained, true, false). Esto permite generar
				rende-rizados condicionales (se verá mas adelante) y gestionar de una
				manera mas eficiente nuestros componentes.
			</p>
			<img src="/react/jsx_syntax/null_undefained.webp" alt="null, undained" />
			<img
				src="/react/jsx_syntax/nada.webp"
				alt="salida en el navegador de nada"
			/>

			<p>
				Si intentamos rende-rizar un Objeto va saltar un error, aunque, hay un
				tipo de Objeto que sí que nos deja enviar como hijo, y es una etiqueta.
			</p>
			<img
				src="/react/jsx_syntax/render_tag.webp"
				alt="enviando un tag como hijo"
			/>
			<img
				src="/react/jsx_syntax/result_render_tag.webp"
				alt="resultado de enviar un tag como hijo"
			/>
			<p>
				Sin embargo, existe un tipo especial de Objeto que si que nos deja
				rende-rizar y es, un <span className="special_word">Array</span>.
			</p>
			<img
				src="/react/jsx_syntax/render_arr.webp"
				alt="renderizando un array como children"
			/>
			<img
				src="/react/jsx_syntax/result_render_arr.webp"
				alt="resultado renderizar un array como children"
			/>
			<p>
				Rende-rizar un Array simplemente es indicar a React que pinte una
				sucesión de elementos, y dependerá de cada elemento, que pintar. Y por
				supuesto, cada elemento sigue las mismas reglas vistas hasta el momento.
			</p>
		</article>
	);
}
