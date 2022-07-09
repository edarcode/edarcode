import { Route, Routes } from "react-router-dom";
import ArrayFunctions from "../components/container/ArrayFunctions/ArrayFunctions";
import AsyncJavascript from "../components/container/AsyncJavascript/AsyncJavascript";
import Class from "../components/container/Class/Class";
import ClassInheritance from "../components/container/ClassInheritance/ClassInheritance";
import Comments from "../components/container/Comments/Comments";
import ConceptsJs from "../components/container/ConceptsJs/ConceptsJs";
import ConsoleJs from "../components/container/ConsoleJs/ConsoleJs";
import ControlStructures from "../components/container/ControlStructures/ControlStructuresJs";
import DataTypes from "../components/container/DataTypes/DataTypes";
import DatesJavascript from "../components/container/DatesJavascript/DatesJavascript";
import DomJavascript from "../components/container/DomJavascript/DomJavascript";
import DynamicImport from "../components/container/DynamicImport/DynamicImport";
import ECMAScript from "../components/container/ECMAScript/ECMAScript";
import ESLint from "../components/container/ESLint/ESLint";
import EventsJs from "../components/container/EventsJs/EventsJs";
import FeaturesJs from "../components/container/FeaturesJs/FeaturesJs";
import Footer from "../components/container/Footer/Footer";
import Functionality from "../components/container/Functionality/Functionality";
import Functions from "../components/container/Functions/Functions";
import FundamentalsJavascript from "../components/container/FundamentalsJavascript/FundamentalsJavascript";
import Header from "../components/container/Header/Header";
import Indentation from "../components/container/Indentation/Indentation";
import IntroJavascript from "../components/container/IntroJavascript/IntroJavascript";
import Json from "../components/container/Json/Json";
import Loops from "../components/container/Loops/Loops";
import Math from "../components/container/Math/Math";
import Methods from "../components/container/Methods/Methods";
import ModulesECMAScript from "../components/container/ModulesECMAScript/ModulesECMAScript";
import MultimediaJavascript from "../components/container/MultimediaJavascript/MultimediaJavascript";
import NamingConventions from "../components/container/NamingConventions/NamingConventions";
import Number from "../components/container/Number/Number";
import Objects from "../components/container/Objects/Objects";
import RegExp from "../components/container/RegExp/RegExp";
import RequestHTTPJavascript from "../components/container/RequestHTTPJavascript/RequestHTTPJavascript";
import String from "../components/container/String/String";
import TypeArray from "../components/container/TypeArray/TypeArray";
import Variables from "../components/container/Variables/Variables";
import WhatIsJs from "../components/container/WhatIsJs/WhatIsJs";
import {
	asyncJs,
	clases,
	classInheritance,
	comments,
	conceptsJs,
	consoleJs,
	controlStructures,
	datesJs,
	domJs,
	dynamicImport,
	ecmascript,
	eslint,
	eventsJs,
	featuresJs,
	functionalityJs,
	functions,
	fundamentalsJs,
	indentation,
	javascript,
	json,
	loops,
	math,
	methods,
	modulesECMAScript,
	multimediaJS,
	namingConventions,
	number,
	objects,
	projects,
	regExp,
	reqHttpJs,
	string,
	typeArray,
	variables
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
						<Route index element={<DataTypes />} />
						<Route path={variables} element={<Variables />} />
						<Route path={number} element={<Number />} />
						<Route path={objects} element={<Objects />} />
						<Route path={math} element={<Math />} />
						<Route path={string} element={<String />} />
						<Route path={methods} element={<Methods />} />
						<Route path={typeArray} element={<TypeArray />} />
					</Route>
					<Route path={featuresJs} element={<FeaturesJs />}>
						<Route index element={<ArrayFunctions />} />
						<Route path={eventsJs} element={<EventsJs />} />
						<Route path={regExp} element={<RegExp />} />
						<Route path={json} element={<Json />} />
						<Route path={clases} element={<Class />} />
						<Route path={classInheritance} element={<ClassInheritance />} />
						<Route path={eslint} element={<ESLint />} />
						<Route path={modulesECMAScript} element={<ModulesECMAScript />} />
						<Route path={dynamicImport} element={<DynamicImport />} />
					</Route>
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
