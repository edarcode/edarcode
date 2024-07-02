import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./global.css";
import { router } from "./router/router";

ReactDOM.createRoot(document.querySelector("#root")!).render(
	<RouterProvider router={router} />
);
