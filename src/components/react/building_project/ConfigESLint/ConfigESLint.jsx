export default function ConfigESLint() {
	const imgsConfigEslint = [];
	for (let i = 0; i < 12; i++) {
		imgsConfigEslint.push(
			`/react/building_project/config_eslint_${i + 1}.webp`
		);
	}
	return (
		<article className="article">
			<h1>ESLint</h1>
			<p>
				El editor tiene que ser el mayor aliado cuando estamos codeando, ya sea,
				advertirnos de algún fallo, una mala sintaxis o algo indebido que
				estemos pasando por alto. Y aquí es donde entra ESLint a nuestro editor
				👌.
			</p>
			<p>
				Lo primero que debemos hacer es instalar ESLint a nuestro editor (VSC).
			</p>
			<img
				src="/react/building_project/eslint_extension.webp"
				alt="extensión VSC ESLint"
			/>

			<p>
				Luego instalar ESLint en nuestro proyecto{" "}
				<span className="special_word">npm i -D eslint</span>
			</p>
			<p>
				Luego se debe configurar ESLint. Vamos a tirar el comando{" "}
				<span className="special_word">npx eslint --init</span> que desplegará
				un cuestionario muy intuitivo e indicamos como deseamos configurar
				ESLint.
			</p>

			{imgsConfigEslint.map((img, index) => (
				<img key={index} src={img} alt="config eslint" />
			))}
			<p>
				Como puede notar nos genera automáticamente un archivo .eslintrc.cjs con
				las especificaciones dadas a eslint, por supuesto puede evitar hacer lo
				en consola y crear manualmente este archivo y cambiarlo a su gusto.
			</p>
			<p>
				En este punto, puede ir a algún archivo de React y verá muchas
				advertencias. Y es que, en efecto, ESLint ya está cumpliendo su tarea de
				avisarnos cuando la estamos embarrando.
			</p>
			<img
				src="/react/building_project/alert_err_eslint.webp"
				alt="errores que advierte eslint"
			/>
			<p>
				Sin embargo, antes de proceder a corregir todos los fallos, vamos a
				incorporar <span className="special_word">Prettier</span>, que sirve
				para formatear code y también nos ayudará a cumplir el objetivo de
				escribir código coherente y de calidad.
			</p>
		</article>
	);
}
