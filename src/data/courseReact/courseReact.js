import { react } from "../../constants/pathRoute";
import { introReact } from "./introReact";
import { whatIsReact } from "./whatIsReact";

export const courseReact = {
	path: react.route,
	topic: "react",
	color: "hsl(193, 95%, 28%)",
	img: "/svgs/react.svg",
	subTopics: [introReact, whatIsReact]
};
