export default function DefaultValue() {
	return (
		<article className="article">
			<h1>Valor por defecto</h1>
			<p>
				En HTML el atributo <span className="special_word">value</span> permite
				establecer un valor por defecto. En la api del DOM, el{" "}
				<span className="special_word">atributo</span> de una etiqueta NO
				necesariamente coincide con su{" "}
				<span className="special_word">propiedad</span> equivalente y en React
				toca tener muy presente esta diferencia entre atributo y propiedad.
			</p>
			<p>
				Cambiar el value de un input en React significa cambiar su propiedad y
				NO su atributo. Por lo tanto, si desea cambiar el valor por defecto de
				un input debe usar la propiedad defaultValue.
			</p>
			<img
				src="/react/jsx_syntax/default_input.webp"
				alt="valor por defecto de un input"
			/>
			<img
				src="/react/jsx_syntax/result_default_input.webp"
				alt="resultado navegador de valor por defecto de un input"
			/>
			<p>Colocar un valor por defecto para otros tipos de inputs</p>
			<img src="/react/jsx_syntax/default_value.webp" alt="valor por defecto" />
			<img
				src="/react/jsx_syntax/result_default_value.webp"
				alt="resultado navegador de valor por defecto"
			/>
			<p>
				Entonces ¿para que sirve value en React? mas adelante se verá, tiene
				otra utilidad muy genial, así que NO se preocupe.
			</p>
		</article>
	);
}
