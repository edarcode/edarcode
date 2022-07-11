import css from "./style.module.css";

export default function ConceptsJs() {
	return (
		<article className={css.article}>
			<header>
				<p className={css.article__quote}>
					Si no has programado anteriormente, debes conocer una serie de
					conceptos básicos.
				</p>
			</header>
			<section className={css.article__glossary}>
				<h1 className={css.article__title}>Glosario 🧠</h1>
				<ul className={css.article__list}>
					<li>
						<strong>Programa:</strong> Conjunto total del code que desarrollas.
						En Javascript, quizás el término más utilizado es{" "}
						<strong>Aplicación web</strong> o <strong>App</strong>.
					</li>
					<li>
						<strong>Algoritmo:</strong> Conjunto de pasos, en un determinado
						orden, para conseguir realizar una tarea o lograr un objetivo.
					</li>
					<li>
						<strong>Comentarios:</strong> Los comentarios en nuestro código son
						fragmentos de texto o anotaciones, el navegador los ignora y no
						repercuten en el programa.
					</li>
					<li>
						<strong>Indentación:</strong> Colocar espacios o tabulaciones en
						nuestro código, para que sea legible (que se entienda)... Esta
						práctica es muy importante y necesaria, y más adelante
						profundizaremos en ella.
					</li>
					<li>
						<strong>Variables:</strong> Nombre genérico que se le da a espacios
						de memoria de nuestra maquina, y en ese espacio meteremos los datos
						que nos de la gana 😎, yo lo veo como direcciones a los datos donde
						sea que el procesador los haya guardado.
					</li>
					<li>
						<strong>Funciones:</strong> Las funciones o metodos son agrupaciones
						de código. Son como variables, pero con la gran diferencia de que{" "}
						<strong>NO guardan datos</strong>, si no <strong>acciones</strong>{" "}
						(pequeños algoritmos). Esto es super útil para organizar nuestro
						code, luego lo veremos 👀.
					</li>
					<li>
						<strong>Parámetros:</strong> Nombre que reciben las variables que
						pasamos a las funciones. A veces se les dice argumentos.
					</li>
					<li>
						<strong>Bucles:</strong> Permiten indicar el número de veces que se
						repetirá una acción o algoritmo o code 😁. De esta forma, sólo
						escribimos una vez en nuestro código, y simplemente indicamos el
						número de veces que queremos que se repita.
					</li>
					<li>
						<strong>Iteración:</strong> Cuando el programa está en un{" "}
						<strong>Bucle</strong> de 3 ciclos o 3 vueltas o 3 repeticiones,
						cada una de las vueltas o repeticiones se le denomina iteración.
						Puse 3 por poner un ej. 😅, pero pueden ser los que uno desee
					</li>
					<li>
						<strong>Librería:</strong> Muchas veces, desarrollamos código que
						resuelve tareas o problemas que, posteriormente, querremos
						reutilizar en varias Apps. Cuando eso ocurre, se suele empaquetar el
						code en lo que llaman en Javascript <strong>Librerías</strong>, que
						no es más que code listo para que otros programadores puedan
						utilizarlo fácilmente en sus Apps y beneficiarse de code que fue
						escrito por otro programador y no tengan que inventar la rueda.
					</li>
				</ul>
			</section>
			<p className={css.article__quote}>
				Me disculpo si fue algo aburrido, ya saben como es esto de los glosarios
				😴, acepto que también me aburrí, pero como siempre,{" "}
				<strong>es un mal necesario.</strong> Nos vemos en el siguiente colega🧐
			</p>
		</article>
	);
}
