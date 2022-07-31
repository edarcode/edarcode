import { react } from "../../constants/pathRoute";

export const jsxSyntax = {
	path: react.jsxSyntax.exactPath,
	topic: "Sintaxis JSX",
	subTopics: [
		{
			topic: "Etiqueta JSX",
			path: react.jsxSyntax.jsxTag.exactPath
		},
		{
			topic: "Prop children",
			path: react.jsxSyntax.children.exactPath
		},
		{
			topic: "Props JSX",
			path: react.jsxSyntax.jsxProps.exactPath
		},
		{
			topic: "Propiedad Style",
			path: react.jsxSyntax.propStyle.exactPath
		}
	]
};
