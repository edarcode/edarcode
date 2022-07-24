import { Route, Routes } from "react-router-dom";
import Footer from "../components/container/Footer/Footer";
import Header from "../components/container/Header/Header";
import { projects } from "../constants/path";
import { react } from "../constants/react";
import Home from "../views/Home/Home";
import NotFound from "../views/NotFound/NotFound";
import Projects from "../views/Projects/Projects";
import React from "../views/React/React";
import css from "./style.module.css";

function App() {
	return (
		<div className={css.App}>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path={projects} element={<Projects />} />
				<Route path={react.path} element={<React />}></Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
