import { react } from "../../constants/pathRoute";

export const introReact = {
	path: react.route,
	topic: "Introducción",
	subTopics: [
		{
			topic: "Requisitos",
			path: react.introReact.requisites.exactPath
		},
		{
			topic: "Chrome y React Developer Tools",
			path: react.introReact.chrome.exactPath
		},
		{
			topic: "Nodejs",
			path: react.introReact.nodejs.exactPath
		},
		{
			topic: "VSC",
			path: react.introReact.vsc.exactPath
		}
	]
};
