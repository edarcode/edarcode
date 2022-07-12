import css from "./style.module.css";

export default function CreateDomElements() {
	return (
		<article className={css.article}>
			<header className={css.article__header}>
				<p className={css.article__quote}>
					Cuando empezamos a desarrollar una web, lo normal es crear{" "}
					<strong>Código HTML</strong> desde un <strong>Archivo HTML</strong>.
					Sin embargo, con el auge de las páginas <strong>SPA</strong> (Single
					Page Application) y los <strong>Frameworks Javascript</strong>, esto
					ha cambiado y es bastante frecuente crear <strong>Código HTML</strong>{" "}
					desde Javascript <strong>dinámicamente</strong>.
				</p>
				<p>
					Un <strong>archivo.js</strong> es más <strong>potente</strong>,{" "}
					<strong>«dinámico»</strong> y <strong>flexible</strong>, con{" "}
					<strong>menos limitaciones</strong>.
				</p>
			</header>
			<section className={css.article__intro}>
				<h1 className={css.article__title}>Crear elementos HTML</h1>
				<p>
					Como siempre <strong>js</strong> nos entrega una serie de métodos para
					crear de forma eficiente diferentes etiquetas HTML 🥰.
				</p>
				<table className={css.article__table}>
					<thead>
						<tr>
							<th>Métodos</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>document.createElement(etiqueta, options)</td>
							<td>
								Crea y devuelve la etiqueta. La <strong>etiqueta</strong> debes
								definirla como <strong>string</strong>
							</td>
						</tr>
						<tr>
							<td>document.createComment(text)</td>
							<td>
								Crea y devuelve un <strong>nodo</strong> de comentarios{" "}
								<strong>{"<!-- text -->"}</strong>
							</td>
						</tr>
						<tr>
							<td>document.createTextNode(text)</td>
							<td>
								Crea y devuelve un <strong>nodo</strong> con el texto pasado por
								parámetro
							</td>
						</tr>
						<tr>
							<td>etiqueta.cloneNode(deep)</td>
							<td>
								Clona la <strong>etiqueta</strong> y devuelve una{" "}
								<strong>copia</strong>. Con deep en true clona también a los{" "}
								<strong>hijos</strong>, con false solo clona la{" "}
								<strong>etiqueta</strong>. <strong>deep</strong> es false por
								defecto
							</td>
						</tr>
						<tr>
							<td>etiqueta.isConnected</td>
							<td>
								Indica si la <strong>etiqueta</strong> está insertada en el{" "}
								<strong>DOM</strong>.
							</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section className={css.article__methods}>
				<h2 className={css.article__h2}>El método createElement({'"tag"'}) </h2>
				<p>
					Aquí es donde empieza lo <strong>divertido</strong> 🔥.
				</p>
				<p>
					Con <strong>createElement()</strong> podemos crear una{" "}
					<strong>etiqueta HTML en memoria</strong> (NO estará insertada aún en
					nuestro <strong>DOM</strong>). Con la etiqueta almacenada en una
					variable, podremos modificarla a gusto, y luego insertarla en algun
					lugar de nuestro <strong>DOM</strong>.
				</p>
				<p>Vamos a centrarnos en el proceso de creación.</p>
				<img src="/createDom/create_element.png" alt="creando etiqueta" />
				<p>
					¿Pan comido verdad? 😉. Creamos un <strong>{"<div></div>"}</strong> y
					una <strong>{"<img/>"}</strong>, aunque aun NO están en el{" "}
					<strong>DOM</strong>.
				</p>
				<p>
					createElement() tiene un parámetro opcional denominado{" "}
					<strong>options</strong>. Si se indica, será un objeto con una
					propiedad <strong>is</strong> para definir un elemento personalizado.
					Se verá más adelante en el apartado de <strong>Web Components</strong>
					.
				</p>
				<p>
					En fin, de igual manera, podemos crear{" "}
					<strong>comentarios HTML</strong> con <strong>createComment()</strong>{" "}
					o <strong>nodos de texto sin etiqueta HTML</strong> con{" "}
					<strong>createTextNode()</strong>, pasándole un{" "}
					<strong>string</strong> con el texto en cuestión.
				</p>
				<img src="/createDom/comment.png" alt="creando comentario" />
			</section>
			<p>
				Los otro métodos los veremos en la acción en la medida que los
				necesitemos. No me gusta saturarme de info 😵
			</p>
			<section className={css.article__attributes}>
				<h2 className={css.article__h2}>Atributos HTML de un elemento</h2>
				<p>
					Una vez tenemos la etiqueta creada podemos{" "}
					<strong>asignarle valores</strong> a los atributos, una de las formas
					es como propiedades de objetos.
				</p>
				<img
					src="/createDom/attributes_modify.png"
					alt="modificando atributos de un div"
				/>
				<img
					src="/createDom/result_modify_attributes.png"
					alt="consola modificando atributos de un div"
				/>
				<p>
					Imagino notaste que la palabra <strong>className</strong> hace
					referencia al atributo <strong>class</strong> del{" "}
					<strong>{"<div>"}</strong>, pero al ser una{" "}
					<strong>palabra reservada</strong> de <strong>Javascript</strong>,
					toca usar <strong>className</strong>, hay otras palabritas que joden
					igualmente, pero no te preocupes son fáciles de recordar.
				</p>
				<p>
					<strong>Otra forma</strong> de{" "}
					<strong>manipular los atributos</strong> es usando los métodos, que en
					lo personal me gustan mas.
				</p>
				<table className={css.article__table}>
					<thead>
						<tr>
							<th>Métodos</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>etiqueta.hasAttributes()</td>
							<td>
								devuelve un valor booleano que indica si el elemento actual
								tiene algún atributo o no.
							</td>
						</tr>
						<tr>
							<td>etiqueta.hasAttribute(att)</td>
							<td>
								devuelve un valor Booleano indicando si el elemento tiene el
								atributo especificado o no.
							</td>
						</tr>
						<tr>
							<td>etiqueta.getAttributeNames()</td>
							<td>
								devuelve los nombres de los atributos de la etiqueta como un
								array de strings. Si el elemento no tiene atributos, devuelve un
								[ ] vacío.
							</td>
						</tr>
						<tr>
							<td>etiqueta.getAttribute(attr)</td>
							<td>
								devuelve el valor del atributo especificado en la etiqueta. Si
								el atributo especificado no existe, el valor retornado null o{" "}
								{'""'}
							</td>
						</tr>
						<tr>
							<td>etiqueta.removeAttribute(att)</td>
							<td>elimina un atributo del la etiqueta especificada.</td>
						</tr>
						<tr>
							<td>etiqueta.setAttribute(att, value)</td>
							<td>
								Establece el valor de un atributo en la etiqueta indicada. Si el
								atributo ya existe, el valor es actualizado, en caso contrario,
								el nuevo atributo es añadido con el nombre y valor indicado.
							</td>
						</tr>
						<tr>
							<td>etiqueta.getAttributeNode(att)</td>
							<td>
								Funciona igual que getAttribute() pero devuelve el atributo como
								nodo.
							</td>
						</tr>
						<tr>
							<td>etiqueta.removeAttributeNode(att)</td>
							<td>
								Funciona igual que removeAttribute() pero devuelve el atributo
								como nodo.
							</td>
						</tr>
						<tr>
							<td>etiqueta.setAttributeNode(att, value)</td>
							<td>
								Funciona igual que setAttribute() pero devuelve el atributo como
								nodo.
							</td>
						</tr>
					</tbody>
				</table>
				<p>
					Dejemo por aquí que ya me aburrí 😅, Nos vemos en el siguiente colega
					🧐
				</p>
			</section>
		</article>
	);
}
