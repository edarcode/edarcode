import { react } from "../../constants/pathRoute";

export const introReact = {
	path: react.route,
	topic: "Introducción",
	subTopics: [
		{
			topic: "Requisitos",
			path: react.route
		},
		{
			topic: "Chrome y React Developer Tools",
			path: `${react.route}/${react.introReact.chrome}`
		}
	]
};
