import css from "./style.module.css";

export default function VirtualDom() {
	return (
		<article className={`${css.article} article`}>
			<h1>Virtual DOM</h1>
			<p>
				El virtual DOM que usa React es una representación mas sencilla del DOM,
				sin embargo, tienen diferencias importantes.
			</p>
			<ul className="lists">
				<li>
					<p>
						El Virtual DOM solo almacena una parte del DOM, por ejemplo, no
						ocupa las etiquetas html, head o body, dado que nunca las va a
						modificar. Su nodo raíz estará directamente en el body del DOM
						(cuadro azul).
					</p>
					<img
						className={css.article__img}
						src="/react/why_react/dom_vdom.webp"
						alt="virtual dom vs dom"
					/>
				</li>
				<li>
					<p>
						Los Nodos del Virtual DOM son objetos mucho mas simples, dado que
						tienen solo la información de las propiedades que están actualmente
						en uso, en lugar de tenerlas todas.
					</p>
					<img
						className={css.article__img}
						src="/react/why_react/dom_vdom2.webp"
						alt="virtual dom vs dom 2"
					/>
				</li>
				<li>
					Los Nodos del Virtual DOM solo tienen referencias a sus Nodos hijos,
					es decir, solo se puede navegar hacía abajo en el árbol (Nodos hijos),
					nunca hacia arriba (Nodos padre) o a los lados (Nodos hermanos). Por
					lo tanto el Virtual DOM es una estructura en formato JSON.
				</li>
			</ul>
			<p>
				Ahora veamos paso a paso el proceso a seguir para dejar lista una web al
				usuario.
			</p>
			<ol>
				<li>
					El navegador rende-riza el DOM con las etiquetas mínimas para
					funcionar, además con un div que será la raíz del Virtual DOM.
				</li>
				<li>
					React crea el Virtual DOM con todos sus Nodos y al finalizar traslada
					todo su contenido al DOM.
				</li>
				<li>
					La web estará lista para el usuario. Y por supuesto el usuario podrá
					realizar acciones que modifiquen la interfaz, es decir, cambiar el
					DOM.
				</li>
			</ol>
			<img src="/react/why_react/react_dom.webp" alt="react y el DOM" />
			<p>
				Ahora veamos como se comporta React ante tales modificaciones. Es
				importante leer bien el siguiente párrafo 🧐.
			</p>
			<p>
				Cuando React detecta un cambio en un Nodo, inmediatamente crea una nueva
				versión del Nodo en el Virtual DOM, pero ese Nodo puede tener múltiples
				modificaciones mas antes de decidir trasladarlo al DOM, es decir React
				espera a tener la versión final final final. Cuando ya se tiene
				calculada la versión final el Virtual DOM ya no coincide con el DOM, por
				lo tanto el algoritmo de React (muy optimizado) decide cual es la forma
				mas eficiente de pushear la nueva versión al DOM.
			</p>
			<p>
				Como pudo notar puse 3 veces la palabra final, esto es para que de
				alguna manera, pueda interpretar que a pesar de que se hagan múltiples
				cambios, React solo va a pushear el ultimo de ellos al DOM, evitando así
				múltiples re-renders en el mismo.
			</p>
			<p>
				Por supuesto esto es un esquema general de como funciona React y las
				ventajas que conlleva usar esta hermosa librería.
			</p>
		</article>
	);
}
