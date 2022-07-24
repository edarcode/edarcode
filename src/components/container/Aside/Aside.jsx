import { useContext } from "react";
import { IsCollapseAside } from "../../../contexts/IsCollapseAside";
import css from "./style.module.css";

export default function Aside() {
	const { isCollapseMenu } = useContext(IsCollapseAside);

	if (!isCollapseMenu) return null;
	return (
		isCollapseMenu && (
			<aside className={css.aside}>
				<nav>
					<a href="">oe</a>
				</nav>
			</aside>
		)
	);
}
