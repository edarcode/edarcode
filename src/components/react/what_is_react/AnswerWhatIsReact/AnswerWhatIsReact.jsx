export default function AnswerWhatIsReact() {
	return (
		<article className="article">
			<h1>¿Qué es React?</h1>
			<p className="quote">
				React es una librería de Javascript para construir Interfaces de
				usuario.
			</p>
			<ul className="lists">
				<li>
					<p>
						Fue desarrollada por Facebook, es de código abierto y actualmente es
						la librería mas utilizada en el mundo, de hecho, va muy por delante
						de sus competidores.
					</p>
					<img
						src="/react/why_react/react_vs_world.webp"
						alt="react vs el mundo"
					/>
				</li>
				<li>
					Lo anterior la convierte en la librería con mejor comunidad y
					ecosistema en el mundo del front-end.
				</li>
				<li>
					Permite crear interfaces completamente declarativas, abstrayendo el
					desarrollador de toda la lógica referente a manipular el DOM.
				</li>
				<li>Basada en componentes.</li>
				<li>
					Aprende una vez y escribe lo donde sea, es decir, puede crear
					interfaces de todo tipo: app web, app mobile, app desktop y otros
					muchos usos que se le han dado a lo largo de la historia.
				</li>
			</ul>
			<p>
				Algo particular es que React está dividido en 2 librerías: React y
				ReactDOM. Con React definimos componentes y todo su comportamiento y con
				ReactDOM se gestiona el virtual DOM y tareas asociadas al rende-rizado
				de los componentes en el navegador.
			</p>
			<p>
				¿Por qué separarlos? Esto está relacionado con la aparición de React
				Native: un framework que nos permite crear apps mobile usando
				componentes de React. React es valido tanto para el navegador como para
				React Native, lo único que hacemos con React (mencionado anteriormente)
				es definir componentes sin importar como se vayan a usar luego.
			</p>
			<p>
				ReactDOM se encarga de manipular componentes de React en un entorno web,
				pero React Native es quien los manipula para en una app mobile, ya sea,
				para android o IOS. Por lo tanto podemos construir el siguiente eslogan.
			</p>
			<p className="quote">
				Aprende React y utilízalo para crear cualquier interfaz.
			</p>
		</article>
	);
}
