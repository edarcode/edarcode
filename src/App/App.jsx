import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/container/Footer/Footer";
import Header from "../components/container/Header/Header";
import Chrome from "../components/react/Chrome/Chrome";
import FirstComponents from "../components/react/FirstComponents/FirstComponents";
import IntroReact from "../components/react/IntroReact/IntroReact";
import Nodejs from "../components/react/Nodejs/Nodejs";
import Requisites from "../components/react/Requisites/Requisites";
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
						</Route>
						<Route path={react.whatIsReact.path} element={<WhatIsReact />}>
							<Route index element={<WhyReact />} />
							<Route
								path={react.whatIsReact.firstComponents.path}
								element={<FirstComponents />}
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
