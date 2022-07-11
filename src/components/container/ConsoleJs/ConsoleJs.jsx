import css from "./style.module.css";

export default function ConsoleJs() {
	return (
		<article className={css.article}>
			<section className={css.article__intro}>
				<p>
					Para acceder a la <strong>Consola Javascript</strong> del navegador,
					vamos a abrir el navegador, click derecho e inspeccionar, nos
					desplegará el Inspector de elementos del navegador, es un panel de
					control donde podemos ver varios aspectos de la página en la que nos
					encontramos: su <strong>HTML</strong>, su <strong>CSS</strong> y bla
					bla bla... muchas otras cosillas por ahí 😅.
				</p>
				<p>
					Concretamente, nos interesa una sección particular del inspector de
					elementos. Para ello, nos moveremos a la pestaña{" "}
					<strong>Console</strong> y ya nos encontraremos en la{" "}
					<strong>Consola Javascript</strong> de la página.
				</p>
				<img
					className={css.article__img}
					src="/console/inspect.png"
					alt="inspeccionar"
				/>
				<p className={css.article__quote}>
					Es posible que el panel te salga en otro lugar, busca los puntitos
					(optiones) para moverlo donde te sea más cómodo, en mi caso salen
					debajo de mi foto de perfil (al fondo a la derecha 🤣, ¡mentira! en la
					parte superior derecha 🔍), solo es clickear (ni idea si esa palabra
					existe 😂, bueno digamos cliquear 🧐) en fin es muy intuitivo 😁.
				</p>
				<img
					className={css.article__img}
					src="/console/console.png"
					alt="consola"
				/>
				<p>
					En esta consola, podemos escribir funciones o sentencias de Javascript
					que estarán actuando en la página que se encuentra la pestaña actual
					del navegador. Podremos observar los resultados que nos devuelve la
					consola al realizar diferentes acciones. Para ello, vamos a ver
					algunas bases:
				</p>
			</section>
			<section className={css.article__console}>
				<h1 className={css.article__title}>La consola</h1>
				<p>
					Vamos a crear un programa que muestre por consola un texto{" "}
					<strong>«Hola Mundo»</strong>. Recuerda darle enter cuando escribas el
					code 🧐.
				</p>
				<img src="/console/hola_mundo.png" alt="hola mundo" />
				<p>
					También podríamos realizar operaciones numéricas, pero antes intenta
					multiplicar mentalmente <strong>456 * 128</strong>.
				</p>
				<p>
					¿Complicado verdad 🤣? bueno acepto que no soy muy bueno en
					matemáticas 😅, pero tengo a mi <strong>esclavo</strong>, y es un
					experto en operaciones como estas y además sé como ordenarle que
					multiplique por mi, es decir vamos a programar 😎.
				</p>
				<img src="/console/multi.png" alt="multiplicación" />
				<p className={css.article__quote}>
					Very easy 😎 ¿no? apuesto a que tardas menos escribiendo el code que
					multiplicando mentalmente 😋.
				</p>
			</section>
			<section className={css.article__siblings}>
				<h2>Hermanitos de console.log() 🙂</h2>
				<p className={css.article__quote}>
					No te preocupes estos si se dan a querer, no como los mios 🤬
				</p>
				<p>
					Para mostrar el resultado por la <strong>Consola Javascript</strong>{" "}
					hemos utilizado la función <strong>console.log</strong>, pero existen
					varias más:
				</p>
				<table className={css.article__table}>
					<thead>
						<tr>
							<th>Función</th>
							<th>Descripción</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>console.log()</td>
							<td>
								Muestra la información proporcionada en la consola Javascript.
							</td>
						</tr>
						<tr>
							<td>console.info()</td>
							<td>
								Equivalente al anterior. Se utiliza para mensajes de
								información.
							</td>
						</tr>
						<tr>
							<td>console.warn()</td>
							<td>Muestra información de advertencia. Aparece en amarillo.</td>
						</tr>
						<tr>
							<td>console.error()</td>
							<td>Muestra información de error. Aparece en rojo.</td>
						</tr>
						<tr>
							<td>console.clear()</td>
							<td>Limpia la consola.</td>
						</tr>
					</tbody>
				</table>
				<p className={css.article__quote}>
					Si alguien te dice que algo está súper rico es mejor verificarlo por
					ti mismo ¿cierto? no vaya a ser que nos estén engañando 🤥. Te invito
					a que pruebes cada método y vayas acostumbrándote a usar la consola y
					tal cual hace un niño, experimentar que pasa si haces algo 🍳.
				</p>
			</section>
			<section className={css["article__apply-multiple-data"]}>
				<h2>Aplicar varios datos</h2>
				<p>
					En el ejemplo anterior, hemos escrito un solo dato por cada línea (un
					texto o una operación numérica), pero <strong>console.log()</strong> y
					sus funciones hermanas permiten añadir varios datos en una misma
					línea, separándolo por comas. <strong>Chusmiemos</strong>
				</p>
				<img src="/console/hola_sr.png" alt="hola mi señor" />
			</section>
			<section className={css["article__apply-css"]}>
				<h2>Aplicar estilos en la consola </h2>
				<p>
					Aunque no es muy práctico y sólo porque podemos y nos da la gana 😋
					apliquemos estilos CSS en la <strong>Consola Javascript</strong>{" "}
					haciendo uso de <strong>%c</strong>, que se reemplazará por los
					estilos indicados:
				</p>
				<img src="/console/hola_edarcode.png" alt="hola edarcode" />
				<p>
					Recalcar que al escribir en consola podemos obviar el{" "}
					<strong>console.log()</strong> y escribir directamente la información,
					pero si queremos mostrar algo por consola desde nuestra{" "}
					<strong>página web</strong> o <strong>app</strong>, es absolutamente
					necesario escribir <strong>console.log()</strong> (o cualquiera de sus
					hermanitos) en nuestro código. 👀
				</p>
			</section>
		</article>
	);
}
