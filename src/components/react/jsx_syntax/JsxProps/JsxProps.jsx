export default function JsxProps() {
	return (
		<article className="article">
			<h1>Props JSX</h1>
			<p>
				En HTML puede añadir atributos a las etiquetas para modificar su
				comportamiento por defecto (class, onclick, ...). En JSX podemos añadir
				dichos atributos o props también. Sin embargo, hay un pequeño cambio en
				la forma de escribirlos.
			</p>
			<p>
				Las props deben escribirse en Camel Case. Por ejemplo, en HTML
				escribimos <span className="special_word">onclick</span>, pero en JSX
				sería <span className="special_word">onClick</span>. Las 2 únicas
				excepciones serían las props area y data.
			</p>
			<p>
				Otro detalle a tener en cuenta, es que en HTML el evento onclick tendría
				que ser un string indicando una función (algo un poco confuso de leer y
				susceptible a errores), en JSX en verdad se espera una función, de
				hecho, la definición de una función, y se ejecutará al activar dicho
				evento.
			</p>
			<img src="/react/jsx_syntax/props_jsx.webp" alt="props jsx" />
			<img
				src="/react/jsx_syntax/result_props_jsx.webp"
				alt="resultado en navegador props jsx"
			/>
			<p>
				Pese a existir diferencias entre HTML y JSX, note que React no está
				inventando nada, solo cambia un poco la sintaxis, por lo que si desea
				usar una prop en JSX, lo idea es que conozca su equivalente en HTML.
			</p>
		</article>
	);
}
