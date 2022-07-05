import Nav from "../Nav/Nav";
import css from "./style.module.css";

export default function Header() {
	return (
		<header className={css.header}>
			<Nav />
		</header>
	);
}
