import { Route, Routes } from "react-router-dom";
import Footer from "../components/container/Footer/Footer";
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
			<Footer />
		</div>
	);
}

export default App;
