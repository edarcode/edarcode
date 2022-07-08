import { Route, Routes } from "react-router-dom";
import Footer from "../components/container/Footer/Footer";
import Header from "../components/container/Header/Header";
import { home, projects } from "../constants/path";
import Home from "../views/Home/Home";
import Projects from "../views/Projects/Projects";
import css from "./style.module.css";

function App() {
	return (
		<div className={css.App}>
			<Header />
			<Routes>
				<Route path={home} element={<Home />} />
				<Route path={projects} element={<Projects />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
