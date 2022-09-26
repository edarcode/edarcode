import { react } from "../../constants/pathRoutes.js/react.js";
import React from "../../views/React/React.jsx";
import { buildingProject } from "./childrens/buildingProject.jsx";
import { introReact } from "./childrens/introReact.jsx";
import { jsxSyntax } from "./childrens/jsxSyntax.jsx";
import { whatIsReact } from "./childrens/whatIsReact.jsx";

export const reactRoute = {
	path: react.path,
	element: <React />,
	children: [introReact, whatIsReact, buildingProject, jsxSyntax]
};
