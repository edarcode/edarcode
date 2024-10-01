import Home from "../pages/Home/Home";
import Lib from "../pages/Lib/Lib";
import Utils from "../pages/Utils/Utils";

export const HOME = {
	id: crypto.randomUUID(),
	path: "",
	to: "/",
	display: "Edar",
	element: <Home />
};

export const UTILS = {
	id: crypto.randomUUID(),
	path: "utils",
	to: "/utils",
	display: "Utils",
	element: <Utils />
};

export const LIB = {
	id: crypto.randomUUID(),
	path: "lib",
	to: "/lib",
	display: "Componentes",
	element: <Lib />
};
