export default function Template() {
	return (
		<article className="article">
			<h1>Template github</h1>
			<p>
				Configurar ESLint y Prettier es sencillo, pero es súper fastidioso tener
				que hacer lo mismo cada que se desea inicializar un nuevo proyecto. Por
				lo tanto vamos a montar el proyecto a github y crear un Template, de tal
				modo que pueda clonar y empezar un nuevo proyecto partiendo del mismo
				Template.
			</p>
			<p>
				Lo ideal sería cambiar el nombre a nuestro proyecto a uno acorde al
				objetivo y fijar nuestras dependencias quitando el{" "}
				<span className="special_word">^</span>.
			</p>
			<img
				src="/react/building_project/fijar_dependencias.webp"
				alt="fijar dependencias"
			/>
			<p>Luego va a github y crea un repositorio normalmente.</p>
			<img
				src="/react/building_project/template_github.webp"
				alt="creando template en github"
			/>
			<p>Copia la dirección remota del repositorio.</p>
			<img
				src="/react/building_project/remote_repo.webp"
				alt="dirección remota del repo"
			/>
			<p>
				Vuelva a su proyecto local, haga un commit y mande a github. Recuerde
				que la dirección remota es propia de cada persona (antes la copió).
			</p>
			<ul>
				<li>git init</li>
				<li>git status</li>
				<li>git add .</li>
				<li>git commit -m {`"first commit"`}</li>
				<li>
					git remote add origin git@github.com:edarcode/template_react_vite.git
				</li>
				<li>git branch -M main</li>
				<li>git push -u origin main</li>
			</ul>
			<img
				src="/react/building_project/console_push_github.webp"
				alt="pusheando proyecto a github"
			/>
			<p>
				Luego vuelva a github e ingrese a su repositorio, verá todo lo que tenía
				en local.
			</p>
			<img
				src="/react/building_project/github_repo.webp"
				alt="repositorio en github"
			/>
			<p>
				Ahora, la idea es convertir este repositorio en un Template, para eso va
				a settings del repositorio.
			</p>
			<img
				src="/react/building_project/settings_repo.webp"
				alt="settings repositorio"
			/>
			<p>Marque la opción Template repository.</p>
			<img
				src="/react/building_project/check_template_repo.webp"
				alt="check template repo"
			/>
			<p>
				Y listo, cuando vuelva a la pagina inicial de su repositorio (template)
				verá un botón <span className="special_word">Use this template</span>{" "}
				con el que podrá crear un nuevo repositorio basado en dicho template. De
				esta forma puede clonar y trabajar en base a un proyecto inicial sin
				tener que configurar todo desde 0.
			</p>
			<img src="/react/building_project/use_template.webp" alt="use template" />
			<p className="quote">
				Genial ¿verdad? yo por ejemplo modifiqué el template a mi gusto
				agregando cosas como: hoja reset de estilos, estructura de carpetas que
				siempre uso, librerías y mucho mas que sé voy a necesitar siempre.
			</p>
		</article>
	);
}
