import { Outlet } from "react-router-dom";
import BoxTopic from "../../components/container/BoxTopic/BoxTopic";
import { javascript } from "../../data/javascript";
import css from "./style.module.css";

export default function Javascript() {
	return (
		<main className={css.javascript}>
			<div className={css.javascript__menu}>
				{javascript.map(item => (
					<BoxTopic key={item.name} {...item} />
				))}
			</div>
			<Outlet />
		</main>
	);
}
