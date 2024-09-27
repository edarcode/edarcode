import Home from "../pages/Home/Home";
import Utils from "../pages/Utils/Utils";

export const HOME = {
  id: crypto.randomUUID(),
  path: "",
  to: "/",
  display: "Edar",
  element: <Home />,
};

export const UTILS = {
  id: crypto.randomUUID(),
  path: "utils",
  to: "/utils",
  display: "Utils",
  element: <Utils />,
};
