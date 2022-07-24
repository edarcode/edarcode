import { Outlet } from "react-router-dom";
import css from "./style.module.css";

export default function IntroReact() {
	return (
		<div className={css.intro}>
			<Outlet />
		</div>
	);
}
