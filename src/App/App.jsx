import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/container/Footer/Footer";
import Header from "../components/container/Header/Header";
import BuildingProject from "../components/react/building_project/BuildingProject/BuildingProject";
import ConfigESLint from "../components/react/building_project/ConfigESLint/ConfigESLint";
import InitVite from "../components/react/building_project/InitVite/InitVite";
import Prettier from "../components/react/building_project/Prettier/Prettier";
import PrettierESLint from "../components/react/building_project/PrettierESLint/PrettierESLint";
import Template from "../components/react/building_project/Template/Template";
import Chrome from "../components/react/intro/Chrome/Chrome";
import IntroReact from "../components/react/intro/IntroReact/IntroReact";
import Nodejs from "../components/react/intro/Nodejs/Nodejs";
import Requisites from "../components/react/intro/Requisites/Requisites";
import Vsc from "../components/react/intro/Vsc/Vsc";
import Children from "../components/react/jsx_syntax/Children/Children";
import JsxProps from "../components/react/jsx_syntax/JsxProps/JsxProps";
import JsxSyntax from "../components/react/jsx_syntax/JsxSyntax/JsxSyntax";
import JsxTag from "../components/react/jsx_syntax/JsxTag/JsxTag";
import PropStyle from "../components/react/jsx_syntax/PropStyle/PropStyle";
import AnswerWhatIsReact from "../components/react/what_is_react/AnswerWhatIsReact/AnswerWhatIsReact";
import CascadeUpdate from "../components/react/what_is_react/CascadeUpdate/CascadeUpdate";
import DomJavascript from "../components/react/what_is_react/DomJavascript/DomJavascript";
import FirstComponents from "../components/react/what_is_react/FirstComponents/FirstComponents";
import ImperativeDeclarative from "../components/react/what_is_react/ImperativeDeclarative/ImperativeDeclarative";
import OriginReactJsx from "../components/react/what_is_react/OriginReactJsx/OriginReactJsx";
import VirtualDom from "../components/react/what_is_react/VirtualDom/VirtualDom";
import WhatIsReact from "../components/react/what_is_react/WhatIsReact/WhatIsReact";
import WhyReact from "../components/react/what_is_react/WhyReact/WhyReact";
import { projects, react } from "../constants/pathRoute";
import { IsCollapseAside } from "../contexts/IsCollapseAside";
import Home from "../views/Home/Home";
import NotFound from "../views/NotFound/NotFound";
import Projects from "../views/Projects/Projects";
import React from "../views/React/React";
import css from "./style.module.css";

function App() {
	const [isCollapseMenu, setIsCollapseMenu] = useState(true);
	return (
		<div className={css.App}>
			<IsCollapseAside.Provider value={{ isCollapseMenu, setIsCollapseMenu }}>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path={projects} element={<Projects />} />
					<Route path={react.path} element={<React />}>
						<Route path={react.introReact.path} element={<IntroReact />}>
							<Route index element={<Requisites />} />
							<Route path={react.introReact.chrome.path} element={<Chrome />} />
							<Route path={react.introReact.nodejs.path} element={<Nodejs />} />
							<Route path={react.introReact.vsc.path} element={<Vsc />} />
						</Route>
						<Route path={react.whatIsReact.path} element={<WhatIsReact />}>
							<Route index element={<WhyReact />} />
							<Route
								path={react.whatIsReact.firstComponents.path}
								element={<FirstComponents />}
							/>
							<Route
								path={react.whatIsReact.originReactJsx.path}
								element={<OriginReactJsx />}
							/>
							<Route
								path={react.whatIsReact.imperativeDeclarative.path}
								element={<ImperativeDeclarative />}
							/>
							<Route
								path={react.whatIsReact.cascadeUpdate.path}
								element={<CascadeUpdate />}
							/>
							<Route
								path={react.whatIsReact.domJavascript.path}
								element={<DomJavascript />}
							/>
							<Route
								path={react.whatIsReact.virtualDom.path}
								element={<VirtualDom />}
							/>
							<Route
								path={react.whatIsReact.answerWhatIsReact.path}
								element={<AnswerWhatIsReact />}
							/>
						</Route>
						<Route
							path={react.buildingProject.path}
							element={<BuildingProject />}
						>
							<Route index element={<InitVite />} />
							<Route
								path={react.buildingProject.configESLint.path}
								element={<ConfigESLint />}
							/>
							<Route
								path={react.buildingProject.prettier.path}
								element={<Prettier />}
							/>
							<Route
								path={react.buildingProject.prettierESLint.path}
								element={<PrettierESLint />}
							/>
							<Route
								path={react.buildingProject.template.path}
								element={<Template />}
							/>
						</Route>
						<Route path={react.jsxSyntax.path} element={<JsxSyntax />}>
							<Route index element={<JsxTag />} />
							<Route
								path={react.jsxSyntax.children.path}
								element={<Children />}
							/>
							<Route
								path={react.jsxSyntax.jsxProps.path}
								element={<JsxProps />}
							/>
							<Route
								path={react.jsxSyntax.propStyle.path}
								element={<PropStyle />}
							/>
						</Route>
					</Route>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</IsCollapseAside.Provider>
			<Footer />
		</div>
	);
}

export default App;
