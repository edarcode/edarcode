export default function WhyReact() {
	return (
		<article className="article">
			<h1>¿Por qué React?</h1>
			<p>
				React es de las librerías mas famosas, pero esto NO fue así todo el
				tiempo. Los cambios se dan en base a necesidades y React llegaba a
				solucionar un gran problema en común, y se posicionó de buena manera. No
				por nada digo &quot;larga vida al 👑&quot;.
			</p>
			<p>
				En 2011 facebook presentaba problemas para garantizar la mantenibilidad
				de su code y estos problemas se debían a la arquitectura con la que
				trabajaban <span className="special_word">MVC</span> (modelo vista
				controlador).
			</p>
			<ul>
				<li>
					<span className="special_word">Modelo:</span> Data almacenada de la
					App.
				</li>
				<li>
					<span className="special_word">Vista:</span> Interfaz de usuario.
				</li>
				<li>
					<span className="special_word">Controlador:</span> Atiende acciones
					del usuario sobre la Vista y llevarlas al Modelo.
				</li>
			</ul>
			<p>
				En MVC el Usuario interactúa con la App a travez de la Vista, cada
				acción se gestionaba en el Controlador y se realizaban los cambios
				pertinentes en el Modelo, luego el Modelo notificaba a la Vista dichos
				cambios, la Vista se actualizaba y presentaba todos los cambios al
				Usuario.
			</p>
			<img src="/react/why_react/mvc.webp" alt="MVC" />
			<p className="quote2">
				En resumen cada acción del usuario implicaba una llamada al servidor 💩.
			</p>
			<p>
				A medida que se requerían mas y mas funcionalidades en al web, mas
				limitaciones presentaban con MVC, llegando al punto en que MVC dejo de
				ser un conjunto de reglas fijas y pasó a ser totalmente interpretado.
			</p>
			<p>
				Para nadie es un secreto que el modelo de negocio de facebook está
				basado en la recopilación de datos (Modelos) y MVC esta pensado para que
				una Vista tenga 1 o unos pocos Modelos. En facebook cada vista ocupaba
				tener cientos de Modelos y la necesidad cada ves era mas y mas grande,
				en la medida que aumentaba la cantidad y calidad de los datos que
				recogían.
			</p>
			<p>
				El code se volvía cada vez mas complejo de entender, incluso para los
				desarrolladores mas experimentados, los nuevos devs invertían semanas
				para poder entender el code. La productividad era realmente mala,
				incorporar un desarrollador al equipo parecía mas un problema que una
				solución.
			</p>
			<img
				src="/react/why_react/productividad.webp"
				alt="productividad facebook"
			/>
			<p className="quote2">
				Facebook necesitaba re-pensar su forma de hacer las cosas, necesitaban
				un 👑
			</p>
		</article>
	);
}
