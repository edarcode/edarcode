export default function DomJavascript() {
	return (
		<article className="article">
			<h1>Dom de Javascript</h1>
			<p>
				Para comprender por qué se implementó un Virtual DOM en React, es vital
				conocer que es el DOM de Javascript y sus particularidades.
			</p>
			<p>
				El DOM es una estructura de datos que los navegadores crean a partir del
				documento HTML que se encuentra rende-rizado en la web. La estructura
				que mejor lo representa es un árbol n-ario.
			</p>
			<img src="/react/why_react/dom_js.webp" alt="dom de js" />
			<p>
				Para poder manipular el DOM, los navegadores ponen a disposición una API
				y a través del objeto document podemos realizar cantidad de operaciones
				(document.querySelector(&quot;...&quot;),
				document.querySelectorAll(&quot;...&quot;), entre otras muchas). Lo
				importante es entender que cualquier cambio que hagamos en un elemento
				del DOM será llevado inmediatamente al elemento HTML correspondiente
				rende-rizado en la web, NO es posible controlar si queremos aplicar el
				cambio o no, es decir, cambia en el DOM y de una, cambia en el documento
				HTML rende-rizado.
			</p>
			<p>
				Cada uno de los Nodos del DOM es un objeto complejo formado por todos
				los atributos y métodos que puede tener dicho Nodo. La mayoría de los
				atributos están en null, dado que, no se están usando en el momento.
			</p>
			<img src="/react/why_react/p_dom.webp" alt="párrafo del DOM" />
			<p>
				Una choclo bien grande para una simple etiqueta {"<p>"} ¿verdad?.
				Imagina el tamaño del DOM entero 😱.
			</p>
			<p>
				Ahora, lo interesante es que estos Nodos almacenan referencias a otros
				Nodos, ya sea, a su padre, a su hermano, a sus hijos. Básicamente cada
				Nodo tiene acceso a todos los otros Nodos directa o indirectamente
				(parentNode, children, previousSibling).
			</p>
			<p>
				De lo anterior podemos inferir que el DOM es una estructura circular
				cuyos nodos son objetos complejos. Un algoritmo que tuviera que trabajar
				con todos estos Nodos complejos y buscara la manera mas eficiente de
				manipularlos sería complejo 😅. Por lo tanto es necesario crear una
				estructura mas simple con Nodos mas simples que ayuden con dicha tarea y
				esa ficha, le cae al <span className="special_word">Virtual DOM.</span>
			</p>
		</article>
	);
}
