import { react } from "../pathRoutes.js/react.js";
import { buildingProject } from "./buildingProject";
import { introReact } from "./introReact";
import { jsxSyntax } from "./jsxSyntax";
import { whatIsReact } from "./whatIsReact";

export const courseReact = {
	path: react.path,
	topic: "React 👑",
	color: "hsl(193, 95%, 28%)",
	img: "/svgs/react.svg",
	subTopics: [introReact, whatIsReact, buildingProject, jsxSyntax]
};
