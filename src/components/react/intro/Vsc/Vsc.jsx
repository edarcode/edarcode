export default function Vsc() {
	return (
		<article className="article">
			<section className="section">
				<h1>Visual Studio Code</h1>
				<p>
					Este editor es el mas famoso y utilizado para proyectos React, es
					ligero, multiplataforma y muy maleable.
				</p>
				<a
					className="url"
					href="https://code.visualstudio.com/download"
					target="_blank"
					rel="noreferrer"
				>
					Sitio oficial para descargar VSC
				</a>
			</section>
			<section className="section">
				<h2>Extensiones</h2>
				<p>
					En este apartado podremos buscar extensiones que deseamos instalar. Es
					recomendable ser muy selectivos e instalar solo lo de verdad
					necesitamos, no hay necesidad de volvernos locos. Como puede notar
					solo tengo 7 instaladas, tengo compañeros con hasta 50 extensiones y
					ni ellos saben por qué o para que instalaron tantas. En lo personal
					estoy de acuerdo con mi profesor Pablo &quot;Menos es Mas&quot;.
				</p>
				<img
					src="/react/intro/extensiones.webp"
					alt="apartado para instalar extensiones"
				/>
				<section className="section">
					<h3>Tema de Color</h3>
					<p>
						A mi me encanta usar gruvbox, lo conocí una vez que estaba
						intentando pasarme a nvim y me enamoré del tema. En VSC vas a
						encontrar muchos resultados, yo recomiendo Gruvbox Theme
					</p>
					<img src="/react/intro/gruvbox.webp" alt="extension gruvbox" />
					<span>En particular la config de Dark Medium</span>
					<img src="/react/intro/config_gruvbox.webp" alt="config gruvbox" />
					<span>Un ejemplo de como se ve</span>
					<img src="/react/intro/example_gruvbox.webp" alt="ejemplo gruvbox" />
				</section>
				<section className="section">
					<h3>Iconos para carpetas y archivos</h3>
					<p>
						Es mucho mas sencillo y agradable a la vista ver un icono que haga
						referencia a cada tipo de fichero o carpeta, Material Icons Theme
						nos ayudará con esto.
					</p>
					<img
						src="/react/intro/material_icons.webp"
						alt="extension material icons themes"
					/>
					<p>
						Por defecto está configurada con los icons de Angular, pero vamos a{" "}
						<span className="special_word">Administrar</span> {"=>"}{" "}
						<span className="special_word">Configuración</span> {"=>"}{" "}
						<span className="special_word">Extensiones</span> {"=>"}{" "}
						<span className="special_word">Material Icons</span> {"=>"}{" "}
						<span className="special_word">Active Icon Pack</span>, despliegas y
						elije React. Si eres ciego como yo, el botón de Administrar está en
						al parte inferior izquierda del editor.
					</p>

					<img src="/react/intro/admin_vsc.webp" alt="admin vsc" />
					<p>
						Mas rápido sería usando directamente el atajo{" "}
						<span className="special_word">Ctrl + ,</span> que nos lleva directo
						a configuración
					</p>
					<img
						src="/react/intro/config_material_icons.webp"
						alt="config material icons"
					/>
				</section>
				<section className="section">
					<h3>Auto Rename Tag</h3>
					<p>
						Cuando cambies el nombre de una etiqueta HTML/XML, cambiará
						automáticamente su pareja.
					</p>
					<img src="/react/intro/rename_tag.webp" alt="rename tag" />
				</section>
			</section>
			<p>
				Hasta aquí por ahora, ESLint y Prettier tendrán su propio apartado,
				igualmente habrá un apartado de como crear Snippets personalizados.
			</p>
			<footer className="quote">
				Quedó re-chulo nuestro editor ¿verdad? 😎. Seguramente estas extensiones
				de VSC te hacen mas feliz y por ende una mejor persona 👻, incluso se
				especula por ahí que te sube las defensas, aleja los malos espíritus y
				hasta pregonan buena fortuna 😆.
			</footer>
		</article>
	);
}
