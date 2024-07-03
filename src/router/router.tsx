import { createBrowserRouter } from "react-router-dom";

import Contact from "../components/containers/Contact/Contact";
import Projects from "../components/containers/Projects/Projects";
import Studies from "../components/containers/Studies/Studies";
import Utilities from "../components/containers/Utilities/Utilities";
import { APP, CONTACT, PROJECTS, STUDIES, UTILITIES } from "../constants/paths";
import App from "../views/App/App";
import ErrPage from "../views/ErrPage/ErrPage";

export const router = createBrowserRouter([
	{
		path: APP,
		element: <App />,
		errorElement: <ErrPage />,
		children: [
			{ path: PROJECTS, element: <Projects /> },
			{ path: CONTACT, element: <Contact /> },
			{ path: UTILITIES, element: <Utilities /> },
			{ path: STUDIES, element: <Studies /> }
		]
	}
]);
