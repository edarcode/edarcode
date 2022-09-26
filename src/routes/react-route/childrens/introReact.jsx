import Chrome from "../../../components/react/intro/Chrome/Chrome.jsx";
import IntroReact from "../../../components/react/intro/IntroReact/IntroReact.jsx";
import Nodejs from "../../../components/react/intro/Nodejs/Nodejs.jsx";
import Requisites from "../../../components/react/intro/Requisites/Requisites.jsx";
import Vsc from "../../../components/react/intro/Vsc/Vsc.jsx";
import { react } from "../../../constants/pathRoutes.js/react.js";

export const introReact = {
	path: react.introReact.path,
	element: <IntroReact />,
	children: [
		{
			path: react.introReact.requisites.path,
			element: <Requisites />
		},
		{
			path: react.introReact.chrome.path,
			element: <Chrome />
		},
		{
			path: react.introReact.nodejs.path,
			element: <Nodejs />
		},
		{
			path: react.introReact.vsc.path,
			element: <Vsc />
		}
	]
};
