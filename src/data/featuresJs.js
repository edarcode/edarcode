import {
	clases,
	classInheritance,
	dynamicImport,
	eslint,
	eventsJs,
	featuresJs,
	json,
	modulesECMAScript,
	regExp
} from "../constants/path";

export const features = {
	name: "Características js",
	subTopics: [
		{
			name: "Array functions",
			path: featuresJs
		},
		{
			name: "Eventos en js",
			path: eventsJs
		},
		{
			name: "RegExp",
			path: regExp
		},
		{
			name: "JSON",
			path: json
		},
		{
			name: "Clases",
			path: clases
		},
		{
			name: "Herencia de Clases",
			path: classInheritance
		},
		{
			name: "ESLint",
			path: eslint
		},
		{
			name: "Módulos ECMAScript",
			path: modulesECMAScript
		},
		{
			name: "Import dinámico en js",
			path: dynamicImport
		}
	]
};
