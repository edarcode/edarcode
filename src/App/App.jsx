import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/container/Footer/Footer";
import Header from "../components/container/Header/Header";
import CascadeUpdate from "../components/react/CascadeUpdate/CascadeUpdate";
import Chrome from "../components/react/Chrome/Chrome";
import DomJavascript from "../components/react/DomJavascript/DomJavascript";
import FirstComponents from "../components/react/FirstComponents/FirstComponents";
import ImperativeDeclarative from "../components/react/ImperativeDeclarative/ImperativeDeclarative";
import IntroReact from "../components/react/IntroReact/IntroReact";
import Nodejs from "../components/react/Nodejs/Nodejs";
import OriginReactJsx from "../components/react/OriginReactJsx/OriginReactJsx";
import Requisites from "../components/react/Requisites/Requisites";
import VirtualDom from "../components/react/VirtualDom/VirtualDom";
import Vsc from "../components/react/Vsc/Vsc";
import WhatIsReact from "../components/react/WhatIsReact/WhatIsReact";
import WhyReact from "../components/react/WhyReact/WhyReact";
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
