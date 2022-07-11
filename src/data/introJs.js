import {
	comments,
	conceptsJs,
	consoleJs,
	controlStructures,
	ecmascript,
	functions,
	indentation,
	javascript,
	loadJsFile,
	loops,
	namingConventions
} from "../constants/path";

export const introJs = {
	name: "Introducción a js",
	subTopics: [
		{
			name: "¿Qué es js?",
			path: javascript
		},
		{
			name: "Consola js",
			path: consoleJs
		},
		{
			name: "¿Cómo cargar un archivo js?",
			path: loadJsFile
		},
		{
			name: "Conceptos básicos",
			path: conceptsJs
		},
		{
			name: "Especificación ECMAScript",
			path: ecmascript
		},
		{
			name: "Comentarios de código",
			path: comments
		},
		{
			name: "Estructuras de control",
			path: controlStructures
		},
		{
			name: "Bucles e iteraciones",
			path: loops
		},
		{
			name: "Indentación de código",
			path: indentation
		},
		{
			name: "Convenciones de nombres",
			path: namingConventions
		},
		{
			name: "Funciones básicas",
			path: functions
		}
	]
};
