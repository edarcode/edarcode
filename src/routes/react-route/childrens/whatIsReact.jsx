import AnswerWhatIsReact from "../../../components/react/what_is_react/AnswerWhatIsReact/AnswerWhatIsReact.jsx";
import CascadeUpdate from "../../../components/react/what_is_react/CascadeUpdate/CascadeUpdate.jsx";
import DomJavascript from "../../../components/react/what_is_react/DomJavascript/DomJavascript.jsx";
import FirstComponents from "../../../components/react/what_is_react/FirstComponents/FirstComponents.jsx";
import ImperativeDeclarative from "../../../components/react/what_is_react/ImperativeDeclarative/ImperativeDeclarative.jsx";
import OriginReactJsx from "../../../components/react/what_is_react/OriginReactJsx/OriginReactJsx.jsx";
import VirtualDom from "../../../components/react/what_is_react/VirtualDom/VirtualDom.jsx";
import WhatIsReact from "../../../components/react/what_is_react/WhatIsReact/WhatIsReact.jsx";
import WhyReact from "../../../components/react/what_is_react/WhyReact/WhyReact.jsx";
import { react } from "../../../constants/path-routes.js/react.js";

export const whatIsReact = {
	path: react.whatIsReact.path,
	element: <WhatIsReact />,
	children: [
		{
			path: react.whatIsReact.whyReact.path,
			element: <WhyReact />
		},
		{
			path: react.whatIsReact.firstComponents.path,
			element: <FirstComponents />
		},
		{
			path: react.whatIsReact.originReactJsx.path,
			element: <OriginReactJsx />
		},
		{
			path: react.whatIsReact.imperativeDeclarative.path,
			element: <ImperativeDeclarative />
		},
		{
			path: react.whatIsReact.cascadeUpdate.path,
			element: <CascadeUpdate />
		},
		{
			path: react.whatIsReact.domJavascript.path,
			element: <DomJavascript />
		},
		{
			path: react.whatIsReact.virtualDom.path,
			element: <VirtualDom />
		},
		{
			path: react.whatIsReact.answerWhatIsReact.path,
			element: <AnswerWhatIsReact />
		}
	]
};
