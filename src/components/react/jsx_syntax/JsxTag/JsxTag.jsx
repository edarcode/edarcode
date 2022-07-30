export default function JsxTag() {
	return (
		<article className="article">
			<h1>¿Qué es una etiqueta JSX?</h1>
			<p>
				Hasta el momento es llamativo el hecho de poder utilizar etiquetas de
				forma tan programática. Poder almacenarlas en variables y luego hacer lo
				que nos plazca con ella es bastante genial.
			</p>
			<h2>¿Qué estamos creando en realidad al crear una etiqueta JSX?</h2>
			<p>
				En HTML tenemos una sintaxis predefinida para crear documentos. En JSX
				disponemos de las mismas etiquetas de HTML y además con el mismo nombre.
			</p>
			<p>
				En ambos lenguajes tenemos una etiqueta de apertura y otra de cierre,
				pero tienen cierta diferencia. Y es que en HTML a algunas etiquetas se
				les puede omitir el cierre, sin embargo, en JSX esto no es posible. En
				JSX no poner un cierre sería semejante a no poner la llave de cierre a
				un objeto.
			</p>
			<p>
				Voy a eliminar el archivo App.jsx y refactorizar el main.jsx para crear
				todo desde 0. Además voy a consologuear la constante app.
			</p>
			<img src="/react/jsx_syntax/refactor_main.webp" alt="refactor main.jsx" />
			<p>
				El console.log imprime realmente un Objeto que representa un Node del
				Virtual DOM. Cada key hace referencia a un dato relevante para dicho
				Nodo, algunas bastante intuitivas y otras que ni-siquiera se verán
				reflejadas en producción.
			</p>
			<img src="/react/jsx_syntax/console_app.webp" alt="refactor main.jsx" />
			<p>
				Ahora, ¿Realmente así va a reflejarse una etiqueta? hace falta mas información, se tiene un Objeto que representa un Nodo, y se
				debe conocer donde está ubicando en el Virtual DOM y donde se debe ubicar en el DOM.
			</p>
			<p>
				El método render por detrás se encarga de toda la implementación, es
				decir, en la linea 9 (primera captura) se crea un Virtual DOM y en base
				a la información del Objeto app se rende-riza una etiqueta
				correspondiente o acorde a la información expuesta en el Objeto en el
				DOM y sin tener que preocuparnos de ninguna implementación. Con lo que
				debemos quedarnos es que render hace toda la magia y nosotros de forma
				declarativa lo ordenamos.
			</p>

			<p>
				Ahora, teniendo claro lo que es una etiqueta JSX, podemos pasar a
				estudiar todas sus reglas para luego poder definir nuestros componentes.
			</p>
		</article>
	);
}
