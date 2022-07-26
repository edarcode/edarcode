export default function OriginReactJsx() {
	return (
		<article className="article">
			<h1>Concecuencias de XHP</h1>
			<p>
				Facebook parecía haber dado con la ficha, tenía un sistema estable y
				predecible y sus servidores se la pasaban rende-rizando platillas, y
				este era precisamente el problema 😅. Cualquier acción del usuario era
				una llamada al servidor 💩, los servidores echaban humo 🔥.
			</p>
			<p>
				La mayoría de estas peticiones eran para un tarea tan sencilla como
				actualizar una vista, una carga se podía delegar al navegador del
				usuario con su CPU y memoria RAM. Con Javascript evitamos muchas de
				estas llamadas al servidor, calmando así, el humo que echaban los
				servidores 💧.
			</p>
			<p>
				En 2011 Jordan Walke crea Fax JS, una librería que permitía crear
				plantillas en js de forma similar a como lo hacían en XHP. Esta fue la
				semilla de un proyecto que se conoce hoy día como React 👑, aquí
				colocaron todo su esmero, aprendieron de sus errores y potenciaron sus
				aciertos.
			</p>
			<h2>JSX vs XHP</h2>
			<p>
				Lo primero que buscaban en React 👑 era la sintaxis, inspirados en XHP,
				mejoraron aun mas su simplicidad y legibilidad
			</p>
			<img src="/react/why_react/xhp_jsx.webp" alt="xhp y jsx" />
			<p>
				Otro punto importante es que se pudiera combinar componentes de forma
				sencilla e intuitiva. Si JSX ya era muy similar a HTML, en este punto
				buscaron que prácticamente se pareciese del todo. Los componentes son
				otra etiqueta HTML 😎.
			</p>
			<img src="/react/why_react/jsx_html.webp" alt="jsx similar a html" />
			<p>
				Además la lógica y la vista se agrupó en 1 mismo archivo, dando al
				desarrollador una perspectiva total de todo lo que hace y tiene el
				componente dentro del mismo componente, facilitando su trabajo y
				comprensión 💘.
			</p>
			<img
				src="/react/why_react/logica_jsx.webp"
				alt="logica y vista en 1 solo archivo jsx"
			/>
		</article>
	);
}
