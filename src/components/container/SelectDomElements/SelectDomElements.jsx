import css from "./style.module.css";

export default function SelectDomElements() {
	return (
		<article className={css.article}>
			<header>
				<p className={css.article__quote}>
					Si nos encontramos en nuestro código Javascript y queremos hacer
					modificaciones en una <strong>etiqueta</strong>, lo primero que
					debemos hacer es <strong>seleccionarla</strong>. Para ello, se suele
					identificar la etiqueta a través de alguno de sus atributos más
					utilizados, usualmente el <strong>id</strong> o la{" "}
					<strong>clase.</strong>
				</p>
			</header>
			<section className={css.article__traditional}>
				<h2 className={css.article__h2}>Métodos tradicionales 👵</h2>
				<p>
					Estos metodos son vieja escuela 👴, no va mal conocerlos, pero no
					centres demasiado tu atención en ellos. De hecho, me da pereza
					explicarlos 😴.
				</p>
				<table className={css.article__table}>
					<thead>
						<tr>
							<th>Funciones de búsqueda</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>document.getElementById(id)</td>
							<td>
								Busca la etiqueta con el id especificado. Si no, devuelve null{" "}
							</td>
						</tr>
						<tr>
							<td>document.getElementsByClassName(class)</td>
							<td>
								Busca etiquetas con la clase especificada. Si no, devuelve
								&quot;[ ]&quot;
							</td>
						</tr>
						<tr>
							<td>document.getElementsByName(name)</td>
							<td>
								Busca etiquetas con el name especificado. Si no, devuelve
								&quot;[ ]&quot;
							</td>
						</tr>
						<tr>
							<td>document.getElementsByTagName(tag)</td>
							<td>
								Busca etiquetas del tipo tag. Si no, devuelve &quot;[ ]&quot;
							</td>
						</tr>
					</tbody>
				</table>
				<p className={css.article__alert}>
					<strong>¡👀 Ojo al Ojo 👀!</strong> Aunque hago referencia a que los
					métodos devuelven un
					<strong>[ ]</strong>, realmente devuelven un tipo de dato{" "}
					<strong>HTMLCollection</strong> o <strong>NodeList</strong>, aunque
					actúan de forma muy similar a un <strong>[ ]</strong>, no son arrays,
					y por lo tanto pueden carecer de algunos métodos, por ejemplo
					.forEach() o .map().
				</p>
			</section>
			<section className={css.article__modern}>
				<h1 className={css.article__title}>Métodos modernos 😎</h1>
				<p>
					Actualmente tenemos a nuestra disposición 2 nuevos métodos de
					selección de etiquetas que son mucho más cómodos y prácticos si
					conocemos <strong>Selectores CSS 💅.</strong>
				</p>
				<table className={css.article__table}>
					<thead>
						<tr>
							<th>Funciones de búsqueda</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>document.querySelector(selector)</strong>
							</td>
							<td>
								Busca <strong>La primer etiqueta que coincide</strong> con el
								selector especificado. Si no, devuelve <strong>null</strong>
							</td>
						</tr>
						<tr>
							<td>
								<strong>document.querySelectorAll(selector)</strong>
							</td>
							<td>
								Busca <strong>Todas las etiquetas que coinciden</strong> con el
								selector especificado. Si no, devuelve <strong>[ ]</strong>
							</td>
						</tr>
					</tbody>
				</table>
				<p>
					Con estos dos métodos podemos realizar todo lo que hacíamos con los
					métodos tradicionales e incluso muchas más cosas (en{" "}
					<strong>menos code</strong>), son muy <strong>flexibles</strong> y{" "}
					<strong>potentes</strong> gracias a los selectores CSS.
				</p>
				<h3 className={css.article__h3}>
					document.querySelector(&quot;Selector&quot;)
				</h3>
				<img src="/selectDom/query_selector.png" alt="querySelector" />
				<p>
					El método devuelve la <strong>Primera etiqueta</strong> que encaje con
					el <strong>Selector CSS</strong> indicado como parámetro, si no,
					devuelte <strong>null</strong>. Y es realmente 🦾 potente 🦾, podemos
					pasarle el selector que nos apetezca por muy avanzado que sea.
				</p>
				<img
					src="/selectDom/result_query_selector.png"
					alt="resultado del querySelector"
				/>
				<h3 className={css.article__h3}>
					document.querySelectorAll(&quot;Selector&quot;)
				</h3>
				<p>
					Devuelve un <strong>NodeList</strong> (similar a un{" "}
					<strong>Array</strong>) y contiene{" "}
					<strong>todas las etiquetas que coinciden</strong> con el{" "}
					<strong>Selector CSS</strong>:
				</p>
				<img src="/selectDom/query_selector_all.png" alt="querySelectorAll" />
				<img
					src="/selectDom/result_query_selectorAll.png"
					alt="resultado del querySelectorAll"
				/>
				<p>
					El <strong>NodeList</strong> NO dispone de métodos como map, forEach y
					otros que si que podemos aplicar a los <strong>arrays</strong>.
				</p>
				<p>
					En JavaScript moderno, una de las formas de convertir un{" "}
					<strong>NodeList</strong> a un <strong>Array</strong> es usando el
					método <strong>Array.from()</strong>, este método es{" "}
					<strong>Rechulo 😎</strong> y hace mas cositas, dale un 👀 luego.
				</p>
				<h4 className={css.article__h4}>Array.from()</h4>
				<p>
					El método <strong>Array.from()</strong> crea una nueva instancia de
					Array a partir de un objeto iterable.
				</p>
				<img
					src="/selectDom/query_selector_all_array_from.png"
					alt="querySelectorAll con array from"
				/>
				<img
					src="/selectDom/result_query_selector_array.png"
					alt="resultado querySelectorAll con array from"
				/>
				<p>
					Al seleccionar una etiqueta y guardarla en una variable, podemos
					realizar selecciones sobre esa variable en lugar de hacerla sobre{" "}
					<strong>document</strong>. Así acotamos la selección por zonas, en
					lugar de hacerlo sobre <strong>document</strong>, que buscará en todo
					el <strong>DOM 😛</strong>.
				</p>
				<img
					src="/selectDom/delimit.png"
					alt="delimitar selección querySelectorAll"
				/>
				<img
					src="/selectDom/result_delimit.png"
					alt="resultado por consola al delimitar selección querySelectorAll"
				/>
			</section>
		</article>
	);
}
