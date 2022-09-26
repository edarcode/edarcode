import BuildingProject from "../../../components/react/building_project/BuildingProject/BuildingProject.jsx";
import ConfigESLint from "../../../components/react/building_project/ConfigESLint/ConfigESLint.jsx";
import InitVite from "../../../components/react/building_project/InitVite/InitVite.jsx";
import Prettier from "../../../components/react/building_project/Prettier/Prettier.jsx";
import PrettierESLint from "../../../components/react/building_project/PrettierESLint/PrettierESLint.jsx";
import Template from "../../../components/react/building_project/Template/Template.jsx";
import { react } from "../../../constants/path-routes.js/react.js";

export const buildingProject = {
	path: react.buildingProject.path,
	element: <BuildingProject />,
	children: [
		{
			path: react.buildingProject.initVite.path,
			element: <InitVite />
		},
		{
			path: react.buildingProject.configESLint.path,
			element: <ConfigESLint />
		},
		{
			path: react.buildingProject.prettier.path,
			element: <Prettier />
		},
		{
			path: react.buildingProject.prettierESLint.path,
			element: <PrettierESLint />
		},
		{
			path: react.buildingProject.template.path,
			element: <Template />
		}
	]
};
