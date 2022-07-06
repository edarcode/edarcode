import { CSS, HTML, javascript, terminal } from "../../../constants/path";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function MainNav() {
	return (
		<nav className={css.mainnav}>
			<BoxLink
				path={HTML}
				text="HTML"
				img={"/html.svg"}
				color="hsl(25, 100%, 50%)"
			/>
			<BoxLink path={CSS} text="CSS" img={"/css.svg"} color="royalblue" />
			<BoxLink
				path={javascript}
				text="javascript"
				img={"/js.svg"}
				color="hsl(60, 100%, 30%)"
			/>
			<BoxLink
				path={terminal}
				text="terminal"
				img={"/terminal.svg"}
				color="hsl(0, 0%, 7%)"
			/>
		</nav>
	);
}
