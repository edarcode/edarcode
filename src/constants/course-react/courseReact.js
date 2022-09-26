import { react } from "../path-routes.js/react.js";
import { buildingProject } from "./buildingProject";
import { introReact } from "./introReact";
import { jsxSyntax } from "./jsxSyntax";
import { whatIsReact } from "./whatIsReact";

export const courseReact = {
	topic: "React",
	path: react.path,
	color: "hsl(193, 95%, 28%)",
	img: "/svgs/react.svg",
	subTopics: [introReact, whatIsReact, buildingProject, jsxSyntax]
};
