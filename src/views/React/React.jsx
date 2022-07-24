import { Outlet } from "react-router-dom";
import Aside from "../../components/container/Aside/Aside";
import { courseReact } from "../../data/courseReact/courseReact";
import css from "./style.module.css";

export default function React() {
	return (
		<main className={css.react}>
			<Aside data={courseReact} />
			<div className={css.react__outlet}>
				<Outlet />
			</div>
		</main>
	);
}
