import { react } from "../path-routes.js/react.js";

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
			topic: "Imperativo vs Declarativo",
			path: react.whatIsReact.imperativeDeclarative.exactPath
		},
		{
			topic: "Cascade Update",
			path: react.whatIsReact.cascadeUpdate.exactPath
		},
		{
			topic: "DOM de Javascript",
			path: react.whatIsReact.domJavascript.exactPath
		},
		{
			topic: "Virtual DOM",
			path: react.whatIsReact.virtualDom.exactPath
		},
		{
			topic: "Ahora si ¿Qué es React?",
			path: react.whatIsReact.answerWhatIsReact.exactPath
		}
	]
};
