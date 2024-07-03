import Aside from "./Aside/Aside";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
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
