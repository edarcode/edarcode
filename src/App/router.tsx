import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/AboutMe/AboutMe";
import Education from "./pages/Education/Education";
import ErrPage from "./pages/ErrPage/ErrPage";
import Utils from "./pages/Utils/Utils";

export const PATH = {
	App: "/",
	AboutMe: "/",
	Education: "/education",
	Utils: "/utils"
};

export const router = createBrowserRouter([
	{
		path: PATH.App,
		element: <App />,
		errorElement: <ErrPage />,
		children: [
			{
				path: PATH.AboutMe,
				element: <AboutMe />
			},
			{
				path: PATH.Education,
				element: <Education />
			},
			{
				path: PATH.Utils,
				element: <Utils />
			}
		]
	}
]);
