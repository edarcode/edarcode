import { Outlet } from "react-router-dom";
import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";
import { Props } from "./types";

export default function Main({ className }: Props) {
	const finalClassName = joinClassNames([css.main, className]);
	return (
		<main className={finalClassName}>
			<Outlet />
		</main>
	);
}
