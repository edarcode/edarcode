import { Route, Routes } from "react-router-dom";
import AsyncJavascript from "../components/container/AsyncJavascript/AsyncJavascript";
import CaracteristicasJavascript from "../components/container/CaracteristicasJavascript/CaracteristicasJavascript";
import DatesJavascript from "../components/container/DatesJavascript/DatesJavascript";
import DomJavascript from "../components/container/DomJavascript/DomJavascript";
import Footer from "../components/container/Footer/Footer";
import FundamentalsJavascript from "../components/container/FundamentalsJavascript/FundamentalsJavascript";
import Header from "../components/container/Header/Header";
import IntroJavascript from "../components/container/IntroJavascript/IntroJavascript";
import MultimediaJavascript from "../components/container/MultimediaJavascript/MultimediaJavascript";
import RequestHTTPJavascript from "../components/container/RequestHTTPJavascript/RequestHTTPJavascript";
import {
	asyncJs,
	datesJs,
	domJs,
	featuresJs,
	fundamentalsJs,
	home,
	javascript,
	multimediaJS,
	projects,
	reqHttpJs
} from "../constants/path";
import Home from "../views/Home/Home";
import Javascript from "../views/Javascript/Javascript";
import NotFound from "../views/NotFound/NotFound";
import Projects from "../views/Projects/Projects";
import css from "./style.module.css";

function App() {
	return (
		<div className={css.App}>
			<Header />
			<Routes>
				<Route path={home} element={<Home />} />
				<Route path={projects} element={<Projects />} />
				<Route path={javascript} element={<Javascript />}>
					<Route index element={<IntroJavascript />} />
					<Route path={fundamentalsJs} element={<FundamentalsJavascript />} />
					<Route path={featuresJs} element={<CaracteristicasJavascript />} />
					<Route path={domJs} element={<DomJavascript />} />
					<Route path={datesJs} element={<DatesJavascript />} />
					<Route path={multimediaJS} element={<MultimediaJavascript />} />
					<Route path={asyncJs} element={<AsyncJavascript />} />
					<Route path={reqHttpJs} element={<RequestHTTPJavascript />} />
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
