import { createBrowserRouter } from "react-router-dom";

import Contact from "../views/Contact/Contact";
import Projects from "../views/Projects/Projects";
import Studies from "../views/Studies/Studies";
import Utilities from "../views/Utilities/Utilities";

import { APP_PATH } from "../constants/appPaths";
import AboutMe from "../views/AboutMe/AboutMe";
import App from "../views/App/App";
import ErrPage from "../views/ErrPage/ErrPage";

export const router = createBrowserRouter([
	{
		path: APP_PATH.index,
		element: <App />,
		errorElement: <ErrPage />,
		children: [
			{ path: APP_PATH.index, element: <AboutMe /> },
			{ path: APP_PATH.projects, element: <Projects /> },
			{ path: APP_PATH.contact, element: <Contact /> },
			{ path: APP_PATH.utilities, element: <Utilities /> },
			{ path: APP_PATH.studies, element: <Studies /> }
		]
	}
]);
