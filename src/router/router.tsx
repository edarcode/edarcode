import { createBrowserRouter } from "react-router-dom";

import { APP } from "../constants/paths";
import App from "../views/App/App";
import ErrPage from "../views/ErrPage/ErrPage";

export const router = createBrowserRouter([
	{
		path: APP,
		element: <App />,
		errorElement: <ErrPage />
	}
]);
