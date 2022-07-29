export default function Prettier() {
	return (
		<article className="article">
			<h1>Prettier</h1>
			<p>
				A Prettier solamente le interesa la forma o formato en que escribimos
				código, sin analizar sí está bien o mal a nivel lógico. ESLint por otra
				parte sí que es capaz de analizar el code, nos indica sí hace falta un
				import, sí estamos usando una palabra reservada en un lugar indebido, sí
				dejamos una variable sin usar y muchas otras cosas que a Prettier le dan
				igual.
			</p>
			<p>
				La idea de Prettier es que todos trabajen bajo el mismo formato y evitar
				cambios fantasma cuando trabajamos en remoto (git y github). Hay quienes
				gustan usar punto y coma al final de cada linea y hay quienes no, hay
				quienes gustan usar comillas simples y otros comillas dobles, y entre
				otros muchos detalles.
			</p>
			<p>
				Al igual que ESLint debemos instalar Prettier en nuestro editor (VSC).
			</p>
			<img
				src="/react/building_project/prettier_extension.webp"
				alt="exten prettier VSC"
			/>
			<p>
				Luego vamos a instalar lo en nuestro proyecto como dependencia{" "}
				<span className="special_word">npm i -D prettier</span>
			</p>
			<p>
				Ahora para que Prettier actúe automáticamente al guardar un documento,
				vamos a configuración de VSC con{" "}
				<span className="special_word">Ctrl+,</span>,{" "}
				<span className="special_word">Editor de texto</span>{" "}
				<span className="special_word">Formato</span> y chuleas Format On Save.
			</p>
			<img
				src="/react/building_project/format_on_save.webp"
				alt="formatear al guardar"
			/>
			<p>
				En este punto cada que se guarde un archivo Prettier va a formatearlo,
				pero entra en conflicto con ESLint que además de analizar el code
				también formatea. ¿Por qué no usar ESLint para ambas cosas entonces?
				ESLint no es especialmente bueno formateando por lo que optamos en usar
				Prettier.
			</p>
			<p>
				¿Como evitar el conflicto? Vamos a crear un archivo de configuración{" "}
				<span className="special_word">.prettierrc</span> en la raíz del
				proyecto y en principio vamos a acomodarlo a gusto en formato JSON. En
				el sitio oficial de Prettier encontraremos toda la cantidad de opciones
				posibles.
			</p>
			<a
				className="url"
				href="https://prettier.io/docs/en/options.html"
				target="_blank"
				rel="noreferrer"
			>
				Sitio oficial Prettier
			</a>
			<img
				src="/react/building_project/config_prettier.webp"
				alt="config prettier"
			/>
			<p>
				Esta es la configuración que a mi mas me agrada, siéntase libre de
				elegir la suya.
			</p>
			<a
				className="download"
				href="/react/building_project/.prettierrc"
				download="prettierrc.json"
			>
				Descargar prettierrc
			</a>
			<ul>
				<li>
					<span className="special_word">{`"semi"`}</span> ¿desea puntos y coma
					al final de cada linea?.
				</li>
				<li>
					<span className="special_word">{`"singleQuote"`}</span> ¿desea usar o
					no comillas simples?.
				</li>
				<li>
					<span className="special_word">{`"jsxSingleQuote"`}</span> ¿desea usar
					comillas simples para JSX?.
				</li>
				<li>
					<span className="special_word">{`"trailingComma"`}</span> al final de
					la ultima key de una objeto ponemos coma o no.
				</li>
				<li>
					<span className="special_word">{`"arrowParens"`}</span> omite o no los
					paréntesis cuando no son necesarios en una arrow function.
				</li>
			</ul>
			<p>
				Ahora si, estamos listos para indicar a ESLint que no se pelee con
				Prettier, aunque, lo veremos en el siguiente apartado porque también
				habrá que configurar unos últimos detalles (NO te preocupes es muy
				sencillo).
			</p>
		</article>
	);
}
