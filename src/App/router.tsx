import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/AboutMe/AboutMe";
import DesignSystem from "./pages/DesignSystem/DesignSystem";
import Education from "./pages/Education/Education";
import ErrPage from "./pages/ErrPage/ErrPage";
import Utils from "./pages/Utils/Utils";

export const PAGES = [
	{
		id: crypto.randomUUID(),
		name: "Sobre mí",
		path: "/",
		element: <AboutMe />
	},
	{
		id: crypto.randomUUID(),
		name: "Educación",
		path: "/education",
		element: <Education />
	},
	{
		id: crypto.randomUUID(),
		name: "Utilidades",
		path: "/utils",
		element: <Utils />
	},
	{
		id: crypto.randomUUID(),
		name: "Design System",
		path: "/design-system",
		element: <DesignSystem />
	}
];

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrPage />,
		children: PAGES
	}
]);
