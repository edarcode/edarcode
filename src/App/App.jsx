import { Route, Routes } from "react-router-dom";
import Header from "../components/container/Header/Header";
import { home } from "../constants/path";
import Home from "../views/Home/Home";
import css from "./style.module.css";

function App() {
	return (
		<div className={css.App}>
			<Header />
			<Routes>
				<Route path={home} element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
