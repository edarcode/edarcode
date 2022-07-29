export default function PrettierESLint() {
	return (
		<article className="article">
			<h1>Prettier + ESLint</h1>
			<p>
				La configuración que se está indicando en Prettier y ESLint es diferente
				y por este motivo chocan, entonces se debe conseguir que una de ellas
				prevalezca sobre la otra. En este caso va a prevalecer la configuración
				de Prettier.
			</p>
			<p>
				Lo primero es instalar la dependencia{" "}
				<span className="special_word">npm i -D eslint-config-prettier</span>
			</p>
			<p>
				Luego se procede a indicar en el archivo{" "}
				<span className="special_word">.eslintrc</span> dicha dependencia en el
				apartado de extends (es importante el orden) debe ir después de la guia
				de estilos que se haya elegido, en mi caso standard.
			</p>
			<img
				src="/react/building_project/config_eslint_prettier.webp"
				alt="config eslint prettier"
			/>
			<p>
				En este punto ESLint ya entiende que no debe pisar a Prettier, sin
				embargo, hay una regla que aún está molestando (React must be in scope
				when using JSX).
			</p>
			<img
				src="/react/building_project/react_must.webp"
				alt="react must be in scope"
			/>
			<p>
				Como bien se sabe en las ultimas versiones de React no es necesario
				importar React para usar JSX, y ESLint aun no lo entiende, por lo que se
				debe agregar un plugin en el archivo de configuración{" "}
				<span className="special_word">.eslintrc</span> en el apartado de
				extends (importante el orden){" "}
				<span className="special_word">plugin:react/jsx-runtime</span>.
			</p>
			<img
				src="/react/building_project/plugin_eslint_react.webp"
				alt="plugin eslint react"
			/>
			<p>Con esto solo quedan errores que sí toca corregir</p>
			<img
				src="/react/building_project/all_ok_eslint_prettier.webp"
				alt="todo ok con eslint y prettier"
			/>
			<p>
				Ahora, hay cosas a tener en cuenta. Debe indicar a Prettier que archivos
				formatear por defecto. Prettier soporta varios archivos ¿cuales interesa
				formatear?.
			</p>
			<img
				src="/react/building_project/prettier_files_soport.webp"
				alt="archivos que soporta prettier"
			/>
			<p>
				De momento interesa Javascript, JSX, CSS, HTML y JSON. Para configurar
				en VSC use el atajo{" "}
				<span className="special_word">Ctrl + Shif + p</span> digite settings
				para filtrar y eleja Configuración JSON.
			</p>
			<img
				src="/react/building_project/settings_json_vsc.webp"
				alt="settings json VSC"
			/>
			<p>
				Luego debe agregar al JSON lo sombreado en la captura, es bastante
				intuitivo. Note que agregué algo opcional y muy recomendable{" "}
				<span className="special_word">organizeImports</span> con dicha
				configuración, VSC automaticamente va a organizar los imports e
				inclusive borrar imports que no se estén usando (es súper útil).
			</p>
			<a
				className="download"
				href="/react/building_project/config_settings_vsc.txt"
				download="config_settings_vsc.txt"
			>
				Descargar .txt con la config
			</a>
			<img
				src="/react/building_project/config_settings_json_vsc.webp"
				alt="settings json VSC"
			/>
			<p>
				Hasta aquí tendríamos todo listo con ESLint, Prettier y VSC, pero lo
				ideal sería tener una alternativa para formatear y analizar el code, es
				decir, en la medida de lo posible facilitarlo por un comando. Incluso se
				puede automatizar para que todo esto suceda al hacer un commit.
			</p>
			<p>
				Para ver a que archivos afecta Prettier usemos el comando{" "}
				<span className="special_word">npx prettier --check .</span> (NO olvide
				el punto)
			</p>
			<img
				src="/react/building_project/check_prettier.webp"
				alt="check que archivos afecta prettier"
			/>
			<p>
				Note que Prettier afecta archivos que NO interesa formatear (el bundle
				dist), note también, que el node_modules es ignorado por defecto. Toca
				crear un <span className="special_word">.prettierignore</span> e indicar
				que archivos desea ignorar.
			</p>
			<img
				src="/react/building_project/prettier_ignore.webp"
				alt="prettier ignore"
			/>
			<p>
				Ahora con <span className="special_word">npx prettier --write .</span>{" "}
				(NO olvide el punto) puede formatear de golpe todos los archivos
				excluyendo lo indicado en{" "}
				<span className="special_word">.prettierignore</span>. Por lo tanto ya
				podemos crear un script en el package.json sin problemas.
			</p>
			<img
				src="/react/building_project/format_prettier_script.webp"
				alt="prettier script"
			/>
			<p>
				Vamos ahora con ESLint. ESLint solo analiza archivos Javascript y por
				exteds también archivos JSX, sin embargo, también debemos crear un{" "}
				<span className="special_word">.eslintignore</span> para que no dañe el
				bundle (dist). Con{" "}
				<span className="special_word">npx eslint . --ext .js,.jsx</span>{" "}
				chequean. Con{" "}
				<span className="special_word">npx eslint . --ext .js,.jsx --fix</span>{" "}
				fixea 😆.
			</p>
			<img
				src="/react/building_project/fix_eslint.webp"
				alt="fixear archivos js y jsx con eslint"
			/>
			<p>
				Para librarse de ese warning toca ir y agregar al archivo de
				configuración de eslint lo sombreado en la captura siguiente.
			</p>
			<img
				src="/react/building_project/version_detect.webp"
				alt="version detect react para eslint"
			/>
			<p>Finalizamos colocando el comando para ESLint en el package.json</p>
			<img
				src="/react/building_project/lint_package.webp"
				alt="comando para eslint en el package.json"
			/>
			<p>
				Note que si tiene errores potencialmente fixeables (
				{`Using target:"_blank" without rel="noreferrer"`}) con el comando{" "}
				<span className="special_word">npm run lint</span> ESLint entrará en
				acción y los arreglará por usted. Contamos además con la primera capa al
				guardar de Prettier.
			</p>
			<p>
				Y listo ya se tiene todo good para codear a gusto con toda la ayuda
				posible de parte de ESLint y Prettier 🤗.
			</p>
		</article>
	);
}
