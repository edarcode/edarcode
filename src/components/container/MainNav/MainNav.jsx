import { CSS, HTML, javascript, terminal } from "../../../constants/path";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function MainNav({ className }) {
	return (
		<nav className={`${css.mainnav} ${className}`}>
			<BoxLink
				className={css.mainnav__link}
				path={HTML}
				text="HTML"
				img={"/html.svg"}
				color="hsl(25, 100%, 50%)"
			/>
			<BoxLink path={CSS} text="CSS" img={"/css.svg"} color="royalblue" />
			<BoxLink
				className={css.mainnav__link}
				path={javascript}
				text="javascript"
				img={"/js.svg"}
				color="hsl(60, 100%, 30%)"
			/>
			<BoxLink
				className={css.mainnav__link}
				path={terminal}
				text="terminal"
				img={"/terminal.svg"}
				color="black"
			/>
		</nav>
	);
}
