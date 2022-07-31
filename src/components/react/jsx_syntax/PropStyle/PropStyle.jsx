export default function PropStyle() {
	return (
		<article className="article">
			<h1>Propidad Style</h1>
			<p>
				Esta es una propiedad especial y sirve para añadir estilos en linea a
				nuestros componentes. Su equivalente en HTML es un string, pero en React
				debe ser un Objeto y cada una de sus key hace referencia a un atributo
				css. Además, si el nombre de una key es compuesto, será necesario
				aplicar Camel Case, por ejemplo, la prop{" "}
				<span className="special_word">font-size</span> pasaría a ser{" "}
				<span className="special_word">fontSize</span>.
			</p>
			<img src="/react/jsx_syntax/style_prop.webp" alt="ejemplo style prop" />
			<img
				src="/react/jsx_syntax/result_style_prop.webp"
				alt="resultado en navegador style prop"
			/>
			<p>
				Por supuesto debe utilizar esta forma de dar estilos cuando de verdad
				amerita la ocasión, lo ideal y mas sencillo es usar el atributo
				className para aplicar estilos a nuestros componentes.
			</p>
		</article>
	);
}
