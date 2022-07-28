export default function InitVite() {
	return (
		<article className="article">
			<h1>Creando app con Vite</h1>
			<p>
				Vite es un framework que nos permite inicializar un proyecto en
				múltiples librerías o si gusta en vanilla js. Es súper súper rápido y
				está ganando mucha popularidad.
			</p>

			<img
				src="/react/building_project/soport_vite.webp"
				alt="librerías soportadas por vite"
			/>
			<a
				className="url"
				href="https://vitejs.dev/"
				target="_blank"
				rel="noreferrer"
			>
				Sitio oficial Vite
			</a>
			<p>
				Para crear nuestro primer proyecto de React con Vite vamos a la consola
				(recuerda ubicarte donde deseas alojar tu proyecto) y digitamos{" "}
				<span className="special_word">npm init vite@latest</span>. Vite nos
				hará un par de preguntas muy sencillas e intuitivas para saber como
				deseamos el proyecto.
			</p>

			<img
				src="/react/building_project/tuto_init_vite.webp"
				alt="iniciando proyecto vite en consola"
			/>
			<p>
				Luego navegamos a nuestro proyecto (ya creado) e instalamos sus
				dependencias.
			</p>
			<img
				src="/react/building_project/npm_i.webp"
				alt="instalando dependencias"
			/>
			<p>
				Súper rápido ¿verdad? ya con esto solo es abrirlo en tu editor favorito
				y empezar a codear 🤗.
			</p>
			<img
				src="/react/building_project/code_punto.webp"
				alt="abriendo proyecto con VSC"
			/>
			<p>
				Con <span className="special_word">npm run dev</span> echas a andar el
				proyecto en tu localhost.
			</p>
			<img
				src="/react/building_project/run_dev.webp"
				alt="corriendo proyecto en localhost"
			/>
			<p>
				Luego ve a tu navegador favorito en{" "}
				<span className="special_word">localhost:#puerto</span> y listo, tenemos
				un servidor local para trabajar a gusto.
			</p>
			<img
				src="/react/building_project/localhost.webp"
				alt="localhost en el navegador"
			/>
			<p>
				Vite, en parte, es tan rápido porque no hace bundle en desarrollo, si
				deseas un un bundle y simular un entorno de producción, use los comandos{" "}
				<span className="special_word">npm run build</span> el cual genera un
				bundle y luego <span className="special_word">npm run preview</span>{" "}
				para simular que corremos nuestro bundle en un entorno de producción.
			</p>
			<img
				src="/react/building_project/production.webp"
				alt="corriendo proyecto en un entorno de producción simulado"
			/>
		</article>
	);
}
