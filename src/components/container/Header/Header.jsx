import BlogNav from "../BlogNav/BlogNav";
import MainNav from "../MainNav/MainNav";
import SocialNav from "../SocialNav/SocialNav";
import css from "./style.module.css";

export default function Header() {
	return (
		<header className={css.header}>
			<SocialNav className={css.header__socialNav} />
			<MainNav className={css.header__mainNav} />
			<BlogNav className={css.header__blogNav} />
		</header>
	);
}
