import { javascript } from "../../../constants/path";
import { react } from "../../../constants/react";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function MainNav({ className }) {
	return (
		<nav className={`${css.mainnav} ${className}`}>
			{/* <BoxLink
				className={css.mainnav__link}
				path={HTML}
				text="HTML"
				img={"/html.svg"}
				color="hsl(25, 100%, 50%)"
			/>
			<BoxLink path={CSS} text="CSS" img={"/css.svg"} color="royalblue" /> */}
			<BoxLink
				className={css.mainnav__link}
				path={javascript}
				text="javascript"
				img={"/svgs/js_color.svg"}
				color="hsl(65, 100%, 20%)"
			/>
			{/* <BoxLink
				className={css.mainnav__link}
				path={terminal}
				text="terminal"
				img={"/terminal.svg"}
				color="black"
			/> */}
			<BoxLink className={css.mainnav__link} {...react} />
		</nav>
	);
}
