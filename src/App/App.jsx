import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/container/Footer/Footer";
import Header from "../components/container/Header/Header";
import IntroReact from "../components/react/IntroReact/IntroReact";
import WhatIsReact from "../components/react/WhatIsReact/WhatIsReact";
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
					<Route path={react.route} element={<React />}>
						<Route index element={<IntroReact />} />
						<Route
							path={react.subRoute.whatIsReact}
							element={<WhatIsReact />}
						/>
					</Route>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</IsCollapseAside.Provider>
			<Footer />
		</div>
	);
}

export default App;
