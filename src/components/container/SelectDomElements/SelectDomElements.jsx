export default function SelectDomElements() {
	return (
		<article>
			<header>
				<p>
					Si nos encontramos en nuestro código Javascript y queremos hacer
					modificaciones en una etiqueta, lo primero que debemos hacer es
					seleccionarla. Para ello, se suele identificar la etiqueta a través de
					alguno de sus atributos más utilizados, el id o la clase.
				</p>
			</header>
			<section>
				<h2>Métodos tradicionales 👵</h2>
				<p>
					Estos metodos son vieja escuela 👴, está bien conocerlos, pero no te
					centres mucho en ellos. De hecho hasta me da pereza explicarlos 😴.
				</p>
				<table>
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
								Busca etiquetas con la clase especificada. Si no, devuelve [].
							</td>
						</tr>
						<tr>
							<td>document.getElementsByName(name)</td>
							<td>
								Busca etiquetas con el name especificado. Si no, devuelve [].
							</td>
						</tr>
						<tr>
							<td>document.getElementsByTagName(tag)</td>
							<td>Busca etiquetas del tipo tag. Si no, devuelve [].</td>
						</tr>
					</tbody>
				</table>
				<p>
					👀 OJO al OJO 👀 Aunque hago referencia a que los metodos devuelven un
					[], realmente los métodos de búsqueda generalmente devuelven un tipo
					de dato <strong>HTMLCollection</strong> o <strong>NodeList</strong>,
					que aunque actúan de forma muy similar a un [], no son arrays, y por
					lo tanto pueden carecer de algunos métodos, como por ejemplo
					.forEach().
				</p>
			</section>
			<section>
				<h1>Métodos modernos 😎</h1>
				<p>
					Actualmente tenemos a nuestra disposición dos nuevos métodos de
					búsqueda de elementos que son mucho más cómodos y prácticos si
					conocemos los selectores <strong>CSS.</strong>
				</p>
				<table>
					<thead>
						<tr>
							<th>Funciones de búsqueda</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>document.querySelector(selector)</td>
							<td>
								Busca <strong>La primer etiqueta</strong> que coincide con el
								selector especificado. Si no, devuelve null{" "}
							</td>
						</tr>
						<tr>
							<td>document.querySelectorAll(selector)</td>
							<td>
								Busca <strong>Todas las etiqueta</strong> que coinciden con el
								selector especificado. Si no, devuelve []
							</td>
						</tr>
					</tbody>
				</table>
				<p>
					Con estos dos métodos podemos realizar todo lo que hacíamos con los
					métodos tradicionales e incluso muchas más cosas (en menos code), son
					muy flexibles y potentes gracias a los selectores CSS.
				</p>
				<h2>document.querySelector(&quot;Selector&quot;)</h2>
				<img src="/selectDom/query_selector.png" alt="querySelector" />
				<p>
					El método devuelve la <strong>Primera etiqueta</strong> que encuentra
					que encaje con el <strong>Selector CSS</strong> indicado como
					parámetro, si no, devuelte <strong>null</strong>. Y es realmente 🦾
					potente 🦾, podemos pasarle el selector que nos apetezca por muy
					complejo que sea.
				</p>
				<img
					src="/selectDom/result_query_selector.png"
					alt="resultado del querySelector"
				/>
				<h2>document.querySelectorAll(&quot;Selector&quot;)</h2>
				<p>
					Devuelve un <strong>NodeList</strong> (similar a un{" "}
					<strong>Array</strong>) y contiene{" "}
					<strong>todas las etiquetas que coinciden</strong> con el{" "}
					<strong>Selector CSS</strong>:
				</p>
				<p>
					El <strong>NodeList</strong> no deja usar metodos como map, forEach y
					otros que si que podemos aplicar a los <strong>arrays</strong>.
				</p>
				<img src="/selectDom/query_selector_all.png" alt="querySelectorAll" />
				<img
					src="/selectDom/result_query_selectorAll.png"
					alt="resultado del querySelectorAll"
				/>
				<p>
					En JavaScript moderno, una de las formas de convertir un{" "}
					<strong>NodeList</strong> en un <strong>Array</strong> es usando el
					método <strong>Array.from()</strong>, este metodo es{" "}
					<strong>Rechulo</strong> y hace mas cositas, dale un 👀 luego.
				</p>
				<h2>Array.from()</h2>
				<p>
					El método Array.from() crea una nueva instancia de Array a partir de
					un objeto iterable.
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
					lugar de realizarlo siempre sobre <strong>document</strong>, que
					buscará en todo el <strong>DOM</strong>.
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
