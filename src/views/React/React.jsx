import { Outlet } from "react-router-dom";
import Aside from "../../components/container/Aside/Aside";
import LearnThis from "../../components/react/LearnThis/LearnThis";
import { courseReact } from "../../constants/course-react/courseReact.js";

import css from "./style.module.css";

export default function React() {
	return (
		<main className={css.react}>
			<Aside data={courseReact} />
			<div className={css.react__wisdom}>
				<Outlet />
				<LearnThis />
			</div>
		</main>
	);
}
