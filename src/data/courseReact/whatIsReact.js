import { react } from "../../constants/pathRoute";

export const whatIsReact = {
	path: react.introReact.exactPath,
	topic: "¿Qué es React?",
	subTopics: [
		{
			topic: "¿Por qué React?",
			path: react.whatIsReact.whyReact.exactPath
		},
		{
			topic: "Primeros Componentes",
			path: react.whatIsReact.firstComponents.exactPath
		},
		{
			topic: "Origen de React y JSX",
			path: react.whatIsReact.originReactJsx.exactPath
		},
		{
			topic: "Imperativo VS Declarativo",
			path: react.whatIsReact.imperativeDeclarative.exactPath
		},
		{
			topic: "Cascade Update",
			path: react.whatIsReact.cascadeUpdate.exactPath
		},
		{
			topic: "Dom de Javascript",
			path: react.whatIsReact.domJavascript.exactPath
		}
	]
};
