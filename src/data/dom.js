import {
	apiClassListJs,
	browseDomElements,
	createDomElements,
	domJs,
	insertDomElements,
	selectDomElements
} from "../constants/path";

export const dom = {
	name: "DOM",
	subTopics: [
		{
			name: "¿Qué es el DOM?",
			path: domJs
		},
		{
			name: "Seleccionar cajas del DOM",
			path: selectDomElements
		},
		{
			name: "Crear cajas en el DOM",
			path: createDomElements
		},
		{
			name: "Insertar cajas en el DOM",
			path: insertDomElements
		},
		{
			name: "API classList de js",
			path: apiClassListJs
		},
		{
			name: "Navegar por cajas del DOM",
			path: browseDomElements
		}
	]
};
