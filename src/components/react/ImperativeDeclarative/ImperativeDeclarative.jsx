export default function ImperativeDeclarative() {
	return (
		<article className="article">
			<h1>Imperativo vs Declarativo</h1>
			<p>
				Para entender estos conceptos veremos un ejemplo; 💭 Imaginemos 💭 que
				toca crear un algoritmo que debe multiplicar * 2 cada elemento de un
				array.
			</p>
			<img src="/react/why_react/array.webp" alt="array multiplicado por 2" />
			<h2>Enfoque Imperativo 💩</h2>
			<p>
				En este enfoque debemos indicar cada uno de los procedimientos e
				instrucciones concretas que debe realizar el algoritmo para cumplir con
				el objetivo, es decir, nos centramos en la implementación.
			</p>
			<p>
				El problema es que existen muchísimas formas de cumplir con el objetivo
				y cada desarrollador lo resolverá como mas le apetezca.
			</p>
			<img
				src="/react/why_react/example_algoritmo_array.webp"
				alt="ejemplo de distintas formas de hacer el algoritmo"
			/>
			<p>
				Como puede ver cada proceso es diferente, y a pesar de que cumplen el
				mismo objetivo, implica tener que testear cada proceso por separado,
				dado que, no todos se rompen de la misma forma. Veamos que sucede si un
				elemento del array es un string.
			</p>
			<img
				src="/react/why_react/example_err_algoritmo_array.webp"
				alt="err en un algoritmo"
			/>
			<p>
				Como puede notar se rompe una de las soluciones, por esto un enfoque
				Imperativo genera code menos mantenible o mejor dicho mas code que
				mantener 💩.
			</p>
			<h2>Enfoque Declarativo 😎</h2>
			<p>
				En este enfoque solo nos importa que hace el code, mas NO como lo hace,
				es decir, se busca abstraernos de la implementación. Para solucionar el
				ejemplo anterior, podríamos utilizar el método map de Javascript.
			</p>
			<img
				src="/react/why_react/example_algoritmo_array_map.webp"
				alt="solución del ejemplo anterior con map"
			/>
			<p>
				Como puede notar en un enfoque declarativo, nos abstraemos de la
				implementación. Los desarrolladores no tendrán que gastar tiempo
				preguntando o infiriendo como se llegó a la solución del algoritmo,
				todos sabemos que hace map y no importa como lo hace internamente.
			</p>
			<p>
				Si se programar de forma Declarativa para resolver una situación,
				tendremos 1 y NO 3 o mas soluciones, dando como resultado un code
				sencillo de entender, mas fácil de mantener y mas predecible.
			</p>
			<p>Por esto React 👑 tiene un enfoque Declarativo.</p>
			<p className="quote">
				Programadores de Facebook comentan que desde que usan React, son capaces
				de pushear commits desde el primer día que entran a trabajar, antes de
				React, se tardaban semanas en hacer el primer commit.
			</p>
		</article>
	);
}
