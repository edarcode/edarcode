import { createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import { APP_PATH } from "../constants/appPaths";
import AboutMe from "../views/AboutMe/AboutMe";
import Education from "../views/Education/Education";
import ErrPage from "../views/ErrPage/ErrPage";
import Projects from "../views/Projects/Projects";
import Utilities from "../views/Utilities/Utilities";

export const router = createBrowserRouter([
	{
		path: APP_PATH.index,
		element: <App />,
		errorElement: <ErrPage />,
		children: [
			{ path: APP_PATH.index, element: <AboutMe /> },
			{ path: APP_PATH.projects, element: <Projects /> },
			{ path: APP_PATH.utilities, element: <Utilities /> },
			{ path: APP_PATH.education, element: <Education /> }
		]
	}
]);
