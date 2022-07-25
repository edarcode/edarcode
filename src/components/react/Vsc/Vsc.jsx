export default function Vsc() {
	return (
		<article>
			<section>
				<h1>Visual Studio Code</h1>
				<p>
					Este editor es el mas famoso y utilizado para provectos React, es
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
			<section>
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
					src="/react/extensiones.webp"
					alt="apartado para instalar extensiones"
				/>
				<section>
					<h3>Tema de Color</h3>
					<p>
						A mi me encanta usar gruvbox, lo conocí una vez que estaba
						intentando pasarme a nvim y me enamoré del tema. En VSC vas a
						encontrar muchos resultados, yo recomiendo Gruvbox Theme:
					</p>
					<img src="/react/gruvbox.webp" alt="extension gruvbox" />
					<span>En particular la config de Dark Medium</span>
					<img src="/react/config_gruvbox.webp" alt="config gruvbox" />
					<span>Un ejemplo de como se ve</span>
					<img src="/react/example_gruvbox.webp" alt="ejemplo gruvbox" />
				</section>
			</section>
		</article>
	);
}
