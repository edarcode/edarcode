import css from "./style.module.css";

export default function WhatIsJs() {
	return (
		<article className={css.article}>
			<header className={css.article__header}>
				<p className={css.article__text}>
					Cualquier sitio web de Internet está construído, como mínimo, por{" "}
					<strong>HTML</strong> y <strong>CSS</strong>. Sin embargo, nos limita
					considerablemente 😥. Y en este punto es donde aparece{" "}
					<strong>Javascript </strong>un lenguaje de programación exquisito para
					la web 😀.
				</p>
			</header>
			<section className={css.article__concept}>
				<h1 className={css.article__title}>
					¿Qué es Javascript? <img src="/js_color.svg" alt="js" />
				</h1>
				<p>
					Un mecanismo con el que podemos decirle a nuestro navegador que tareas
					debe realizar, cuantas veces y en que orden.
				</p>
				<p>
					Muchas de las tareas que realizamos con <strong>HTML</strong> y{" "}
					<strong>CSS</strong> que son super aburridas y repetitivas se podrían
					realizar con <strong>Javascript</strong>, con este lenguaje vamos a
					hacer que la maquina sea nuestra esclava y haga el trabajo duro por
					nosotros.
				</p>
				<p>Para comprenderlo, veamos el siguiente ejemplo:</p>
				<img
					className={css.article__img}
					src="/javascript/numbers.png"
					alt="ejemplo"
				/>
				<p>
					Imaginemos que toca crear una lista de números del 1 al 100. Hacerlo
					solamente con <strong>HTML</strong> sería fastidioso, ya que
					tendríamos que copiar y pegar como tontos 100 veces el{" "}
					<span> &#60;p&#62;</span> 😪. Con Javascript, podemos decirle al
					navegador que escriba el primer párrafo
					<span> &#60;p&#62;</span>, y luego que lo repita tantas veces como
					necesitemos y además que en cada render <span> &#60;p&#62;</span> vaya
					sumándo uno al número que tenemos dentro <span> &#60;p&#62;</span>. Y
					todo con un par de líneas de code 😎, mientras que con{" "}
					<strong>HTML</strong> ¿para qué te digo? tú ya lo sabes sería un
					martirio 😂.
				</p>
			</section>
			<section className={css.article__requirements}>
				<h2 className={css.article__difficulty}>
					&quot;Detallitos a tener en cuenta 😁&quot;
				</h2>
				<p>
					Aunque <strong>Javascript</strong> es ideal para muchos casos, es un
					poquito más complicado que aprender <strong>HTML</strong> o{" "}
					<strong>CSS</strong>, pero eso no es motivo para detenernos ¿verdad?,
					si fuera facil no sería tan divertido 😋. Para ir a una fiesta 🥳 y
					enamorar a un chico o una chica nos toca vestirnos adecuadamente y
					estar lo mas preparado posible, y no es diferente si deseas cortejar a{" "}
					<strong>Javascript 🥰</strong>. Antes debemos conocer varias cosas:
				</p>
				<ul>
					<li>
						De entrada tendremos que adquirir la llamada logica de
						programación🤪.
					</li>
					<li>
						Programar no es más que decirle a una máquina que cosas debe hacer y
						como debe hacerlas.
					</li>
					<li>
						Para darle órdenes a una máquina debemos tener claro que esas
						órdenes son correctas y harán que la maquina haga exactamente lo que
						le ordenamos y si, tal cual como sombras de gray &#40;relación
						Amo-Esclavo 😂&#41;. Por tanto, un error de la maquina lo más seguro
						es que sea un error tuyo 😁 y esto a veces es algo estresante,
						buscar <strong>bugs</strong> y arreglarlos es todo un arte 😂.
					</li>
				</ul>
				<p className={css.article__quote}>
					Dicho esto, es necesario tener presente que aprender a programar es
					una tarea que no ocurre de un día para otro. Requiere tiempo,
					esfuerzo, acostumbrarse a cambiar la forma de pensar y practicar
					mucho. De hecho practicar te obligará a hacer todo lo anterior 😄. Lo
					chevere de aprender a programar es que verás resultados inmediatos
					cuando aprendas algo nuevo y esto es bastante adictivo.{" "}
					<strong>Programar es genial y seguro que te vas enamorar 😎</strong>
				</p>
				<ul>
					<li>
						Puedes copiar un programa en segundos, pero eso no significa que lo
						entiendas.
					</li>
					<li>
						Puedes comprender un programa en minutos, pero eso no significa que
						lo puedas crear.
					</li>
					<li>
						Puedes crear un programa en horas, pero eso no significa que sepas
						programar.
					</li>
					<li>
						Puedes aprender a programar en semanas, pero eso no significa que no
						cometas errores.
					</li>
					<li>
						Puedes aprender a programar bien y sin demasiados errores en meses.
					</li>
				</ul>
			</section>
			<footer className={css.footer}>
				<em>
					Dominar la programación es una tarea que requiere años, salvo que
					estés bendito por los dioses.😁
				</em>
			</footer>
		</article>
	);
}
