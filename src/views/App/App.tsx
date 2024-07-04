import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import Main from "./Main/Main";
import css from "./css.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<Header className={css.header} />
			<Main className={css.main} />
			<Footer className={css.footer} />
		</div>
	);
}
