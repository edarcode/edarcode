import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/container/Footer/Footer";
import Header from "../components/container/Header/Header";
import { IsCollapseAside } from "../contexts/IsCollapseAside";
import css from "./style.module.css";

function App() {
	const [isCollapseMenu, setIsCollapseMenu] = useState(true);
	return (
		<div className={css.App}>
			<IsCollapseAside.Provider value={{ isCollapseMenu, setIsCollapseMenu }}>
				<Header />
				<Outlet />
			</IsCollapseAside.Provider>
			<Footer />
		</div>
	);
}

export default App;
