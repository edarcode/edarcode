import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import BoxTopic from "../../components/container/BoxTopic/BoxTopic";
import { javascript } from "../../data/javascript";
import css from "./style.module.css";

export default function Javascript() {
	const [isCollapseMenu, setIsCollapseMenu] = useState(true);
	const handleClickCollapseMenu = e => {
		setIsCollapseMenu(isCollapseMenu => !isCollapseMenu);
	};
	return (
		<main className={css.javascript}>
			{(!isCollapseMenu && (
				<FaBars
					className={css.javascript__fabar}
					onClick={handleClickCollapseMenu}
				/>
			)) || (
				<CgCloseO
					className={css.javascript__fabar}
					onClick={handleClickCollapseMenu}
				/>
			)}
			<aside
				className={
					(isCollapseMenu && css.javascript__menu) ||
					`${css.javascript__menu} ${css["javascript__menu--hidden"]}`
				}
			>
				{javascript.map(item => (
					<BoxTopic key={item.name} {...item} />
				))}
			</aside>
			<section className={css.javascript__outlet}>
				<Outlet />
			</section>
		</main>
	);
}
