import { react } from "../../constants/pathRoute";
import { introReact } from "./introReact";
import { whatIsReact } from "./whatIsReact";

export const courseReact = {
	path: react.path,
	topic: "React 👑",
	color: "hsl(193, 95%, 28%)",
	img: "/svgs/react.svg",
	subTopics: [introReact, whatIsReact]
};
