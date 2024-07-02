import Aside from "../../containers/Aside/Aside";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import Main from "../../containers/Main/Main";
import css from "./css.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<Aside className={css.aside} />
			<Header className={css.header} />
			<Main className={css.main} />
			<Footer className={css.footer} />
		</div>
	);
}
