import { react } from "../../constants/pathRoute";

export const whatIsReact = {
	path: `${react.route}/${react.whatIsReact}`,
	topic: "¿Qué es React?",
	subTopics: [
		{
			topic: "¿Por qué React?",
			path: `${react.route}/${react.whatIsReact.route}`
		},
		{
			topic: "Primeros Componentes",
			path: `${react.route}/${react.whatIsReact.route}/${react.whatIsReact.firstComponents}`
		}
	]
};
