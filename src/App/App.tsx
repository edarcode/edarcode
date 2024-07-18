import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import css from "./css.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<Header className={css.header} />
			<main className={css.main}>
				<Outlet />
			</main>
			<Footer className={css.footer} />
		</div>
	);
}
