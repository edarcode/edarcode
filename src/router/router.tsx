import { createBrowserRouter } from "react-router-dom";

import Contact from "../components/containers/Contact/Contact";
import Projects from "../components/containers/Projects/Projects";
import Studies from "../components/containers/Studies/Studies";
import Utilities from "../components/containers/Utilities/Utilities";

import AboutMe from "../components/containers/AboutMe/AboutMe";
import { APP_PATH } from "../constants/appPaths";
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
