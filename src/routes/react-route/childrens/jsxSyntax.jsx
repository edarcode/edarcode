import Children from "../../../components/react/jsx_syntax/Children/Children.jsx";
import DefaultValue from "../../../components/react/jsx_syntax/DefaultValue/DefaultValue.jsx";
import JsxProps from "../../../components/react/jsx_syntax/JsxProps/JsxProps.jsx";
import JsxSyntax from "../../../components/react/jsx_syntax/JsxSyntax/JsxSyntax.jsx";
import JsxTag from "../../../components/react/jsx_syntax/JsxTag/JsxTag.jsx";
import PropStyle from "../../../components/react/jsx_syntax/PropStyle/PropStyle.jsx";
import { react } from "../../../constants/path-routes.js/react.js";

export const jsxSyntax = {
	path: react.jsxSyntax.path,
	element: <JsxSyntax />,
	children: [
		{
			path: react.jsxSyntax.jsxTag.path,
			element: <JsxTag />
		},
		{
			path: react.jsxSyntax.children.path,
			element: <Children />
		},
		{
			path: react.jsxSyntax.jsxProps.path,
			element: <JsxProps />
		},
		{
			path: react.jsxSyntax.propStyle.path,
			element: <PropStyle />
		},
		{
			path: react.jsxSyntax.defaultValue.path,
			element: <DefaultValue />
		}
	]
};
