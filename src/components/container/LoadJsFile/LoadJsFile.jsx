import css from "./style.module.css";

export default function LoadJsFile() {
	return (
		<article className={css.article}>
			<header className={css.article__header}>
				<p>
					Una página web es un <strong>Documento HTML</strong> donde están todas
					las etiquetas <strong>HTML</strong> de la mismo. A lo largo de ese
					documento, pueden existir referencias o relaciones a otros documentos,
					como <strong>Archivos CSS</strong> o{" "}
					<strong>Archivos Javascript</strong>.
				</p>
				<p>
					Por ejemplo, si dentro del <strong>Documento HTML</strong> se
					encuentra una referencia a un <strong>Archivo CSS</strong>, el
					navegador lo descarga y lo aplica al <strong>Documento HTML</strong>,
					cambiando su apariencia. De la misma forma, si encuentra una
					referencia a un archivo Javascript, el navegador lo descarga y ejecuta
					las órdenes que allí se indican.
				</p>
			</header>
			<section className={css.article__inline}>
				<h2>Script en línea 💩</h2>
				<p>
					Tenemos un <strong>Documento HTML</strong>; el navegador deberá
					pintarlo en pantalla, pero existe una etiqueta con la que podemos
					pedirle que haga mas cositas 😎. Dentro de la etiqueta{" "}
					<strong>&#60;script&#62;</strong> colocaremos todas las ordenes que
					deseamos y el navegador tendrá que cumplirlas. 😜
				</p>
				<p>
					{" "}
					En este caso mostrar por consola un <strong>¡Amo programar!</strong>
				</p>
				<img src="/functionality/amo_programar.png" alt="amo programar" />
				<p>
					Este forma de escribir <strong>scripts</strong> se denomina{" "}
					<strong>Javascript en línea</strong> (inline), significa que el
					<strong>Javascript</strong> está escrito directamente en el código{" "}
					<strong>HTML</strong>, pero no es recomendable, ya que lo ideal es
					separar el <strong>Código HTML</strong> del{" "}
					<strong>Código Javascript</strong>. Aquí cae genial un dicho de mi
					pueblo{" "}
					<strong> &quot;No hagamos un arroz con mango&quot; 🤣😂</strong>.
				</p>
				<p>
					Esta forma de incluir <strong>Javascript</strong> (inline) es
					fastidiosisisisima <strong>💭 Activemos modo imaginación 💭</strong>{" "}
					Imaginemos que tenemos <strong>10 webs</strong> y necesitamos usar el
					mismo <strong>code js</strong> para todas, además, imagina que el{" "}
					<strong>Code js tiene 50 lineas</strong>, tendremos que volver a
					escribir como tontos <strong>50 lineas de code js 10 veces</strong>, y
					eso da mas pereza que los lunes 😪.
				</p>
			</section>
			<section className={css.article__external}>
				<h2>Script externo 🧠</h2>
				<p>
					Para referenciar un <strong>Documento Javascript</strong> en nuestro{" "}
					<strong>HTML</strong>, utilizaremos la etiqueta{" "}
					<strong>&#60;script&#62;</strong>, sólo que en este caso, usaremos un
					atributo <strong>src</strong> (source).
				</p>
				<img src="/functionality/html_script.png" alt="html con script" />
				<p>
					El texto <strong>&quot;index.js&quot;</strong> dentro del{" "}
					<strong>src</strong> no es más que una referencia o dirección a un{" "}
					<strong>Archivo index.js</strong> situado en la misma carpeta donde
					tenemos el <strong>Documento HTML</strong>. Si en este{" "}
					<strong>Archivo Javascript</strong>, incluímos un{" "}
					<strong>console.log(&quot;¡Amo programar!&quot;)</strong>, ese mensaje
					debería aparecer en la consola Javascript al cargar la web.
				</p>
				<p>
					Y aquí podemos escribir las lineas de code que nos de la gana, y si
					necesitaramos incluir ese <strong>code js</strong> en 10 webs solo
					necesitamos escribir 10 veces 1 sola linea, que sería la mera refencia
					o dirección del archivo.js.
				</p>
				<img src="/functionality/indexjs.png" alt="indexjs" />
				<p>
					Ahora ya no tenemos ese <strong>arroz con mango 🤣</strong> y tampoco
					nos toca trabajar de más. De esta forma lo tendríamos todo separado y
					más ordenado como tiene que ser 😎.
				</p>
			</section>
			<section className={css.article__location}>
				<h2>Ubicación de la etiqueta script ⚓</h2>
				<p>
					Si te fijas, del ejemplo anterior, la etiqueta{" "}
					<strong>&#60;script&#62;</strong> está situada dentro de la etiqueta{" "}
					<strong>&#60;head&#62;</strong>. Esto significa que la web descargará
					el <strong>Archivo Javascript</strong> antes de empezar a dibujar el
					contenido de la web <strong>&#60;body&#62;</strong>.
				</p>
				<table className={css.article__table}>
					<thead>
						<tr>
							<th>Ubicación</th>
							<th>¿Cómo descarga el .js?</th>
							<th>Estado de la web</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								En <strong>&#60;head&#62;</strong>
							</td>
							<td>
								<strong>ANTES</strong> de empezar a dibujar la web
							</td>
							<td>Web sin dibujar</td>
						</tr>
						<tr>
							<td>
								En <strong>&#60;body&#62;</strong>
							</td>
							<td>
								<strong>DURANTE</strong> el dibujado de la página
							</td>
							<td>
								Web Dibujada hasta donde está la etiqueta &#60;script&#62;
							</td>
						</tr>
						<tr>
							<td>
								Antesito de cerrar <strong>&#60;/body&#62;</strong>
							</td>
							<td>
								<strong>DESPUÉS</strong> de dibujar la web
							</td>
							<td>Dibujada al 100%</td>
						</tr>
					</tbody>
				</table>
				<p>
					El navegador puede descargar un <strong>Documento Javascript</strong>{" "}
					en cualquier momento de la carga de la web y necesitamos saber cuál es
					el momento más oportuno para nosotros.
				</p>
				<ul>
					<li>
						Si queremos que un <strong>Documento Javascript</strong> actúe antes
						que se muestre la página, la opción de colocarlo en el{" "}
						<strong>&#60;head&#62;</strong> es la más adecuada.
					</li>
					<li>
						Si, queremos que actúe una vez se haya terminado de cargar la web,
						colocarlo justito antes de cerrar el{" "}
						<strong>&#60;/body&#62;</strong> es lo más adecuado. Esta opción es
						equivalente a usar el atributo <strong>defer</strong> en la etiqueta{" "}
						<strong>&#60;script&#62;</strong>
					</li>
				</ul>
				<img src="/functionality/defer.png" alt="indexjs" />
			</section>
			<footer>
				<p className={css.article__quote}>
					Lo sé tanta parla para 1 linea de code 😂, pero así es la vida y todos
					esos detallitos que fui contandote es importante saberlos. Y ¡ey!
					traté de hacerlo lo mas divertido posible para ti y para mi, que me
					moriría del aburrimiento si escribiera los articulos de otra manera
					😁. <br /> Nos vemos en el siguiente 😜.
				</p>
			</footer>
		</article>
	);
}
