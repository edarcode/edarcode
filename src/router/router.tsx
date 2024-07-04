import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import { APP_PATH } from "../constants/appPaths";
import AboutMe from "../views/AboutMe/AboutMe";
import Contact from "../views/Contact/Contact";
import ErrPage from "../views/ErrPage/ErrPage";
import Projects from "../views/Projects/Projects";
import Studies from "../views/Studies/Studies";
import Utilities from "../views/Utilities/Utilities";

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
