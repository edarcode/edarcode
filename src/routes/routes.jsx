import { createBrowserRouter } from "react-router-dom";
import App from "../App/App.jsx";
import NotFound from "../views/NotFound/NotFound.jsx";
import { homeRoute } from "./home-route/homeRoute.jsx";
import { projectsRoute } from "./projects-route/projectsRoute.jsx";
import { reactRoute } from "./react-route/reactRoute.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [homeRoute, projectsRoute, reactRoute]
	}
]);
