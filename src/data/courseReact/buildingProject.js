import { react } from "../../constants/pathRoute";

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
		}
	]
};
