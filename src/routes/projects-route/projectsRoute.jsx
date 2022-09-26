import { projects } from "../../constants/pathRoutes.js/project.js";
import Projects from "../../views/Projects/Projects.jsx";

export const projectsRoute = {
	path: projects,
	element: <Projects />
};
