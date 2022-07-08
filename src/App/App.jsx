import { Route, Routes } from "react-router-dom";
import AsyncJavascript from "../components/container/AsyncJavascript/AsyncJavascript";
import CaracteristicasJavascript from "../components/container/CaracteristicasJavascript/CaracteristicasJavascript";
import Comments from "../components/container/Comments/Comments";
import ConceptsJs from "../components/container/ConceptsJs/ConceptsJs";
import ConsoleJs from "../components/container/ConsoleJs/ConsoleJs";
import ControlStructures from "../components/container/ControlStructures/ControlStructuresJs";
import DatesJavascript from "../components/container/DatesJavascript/DatesJavascript";
import DomJavascript from "../components/container/DomJavascript/DomJavascript";
import ECMAScript from "../components/container/ECMAScript/ECMAScript";
import Footer from "../components/container/Footer/Footer";
import Functionality from "../components/container/Functionality/Functionality";
import Functions from "../components/container/Functions/Functions";
import FundamentalsJavascript from "../components/container/FundamentalsJavascript/FundamentalsJavascript";
import Header from "../components/container/Header/Header";
import Indentation from "../components/container/Indentation/Indentation";
import IntroJavascript from "../components/container/IntroJavascript/IntroJavascript";
import Loops from "../components/container/Loops/Loops";
import MultimediaJavascript from "../components/container/MultimediaJavascript/MultimediaJavascript";
import NamingConventions from "../components/container/NamingConventions/NamingConventions";
import RequestHTTPJavascript from "../components/container/RequestHTTPJavascript/RequestHTTPJavascript";
import WhatIsJs from "../components/container/WhatIsJs/WhatIsJs";
import {
	asyncJs,
	comments,
	conceptsJs,
	consoleJs,
	controlStructures,
	datesJs,
	domJs,
	ecmascript,
	featuresJs,
	functionalityJs,
	functions,
	fundamentalsJs,
	indentation,
	javascript,
	loops,
	multimediaJS,
	namingConventions,
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
				<Route index element={<Home />} />
				<Route path={projects} element={<Projects />} />
				<Route path={javascript} element={<Javascript />}>
					<Route element={<IntroJavascript />}>
						<Route index element={<WhatIsJs />} />
						<Route path={consoleJs} element={<ConsoleJs />} />
						<Route path={functionalityJs} element={<Functionality />} />
						<Route path={conceptsJs} element={<ConceptsJs />} />
						<Route path={ecmascript} element={<ECMAScript />} />
						<Route path={comments} element={<Comments />} />
						<Route path={controlStructures} element={<ControlStructures />} />
						<Route path={loops} element={<Loops />} />
						<Route path={indentation} element={<Indentation />} />
						<Route path={namingConventions} element={<NamingConventions />} />
						<Route path={functions} element={<Functions />} />
					</Route>
					<Route path={fundamentalsJs} element={<FundamentalsJavascript />}>
						{/* <Route index element={<WhatIsJs />} /> */}
					</Route>
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
