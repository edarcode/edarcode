import { react } from "../path-routes.js/react.js";

export const buildingProject = {
	path: react.buildingProject.exactPath,
	topic: "Inicializando Proyecto",
	subTopics: [
		{
			topic: "Vite",
			path: react.buildingProject.initVite.exactPath
		},
		{
			topic: "ESLint",
			path: react.buildingProject.configESLint.exactPath
		},
		{
			topic: "Prettier",
			path: react.buildingProject.prettier.exactPath
		},
		{
			topic: "Prettier + ESLint",
			path: react.buildingProject.prettierESLint.exactPath
		},
		{
			topic: "Template github",
			path: react.buildingProject.template.exactPath
		}
	]
};
