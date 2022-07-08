import BlogNav from "../BlogNav/BlogNav";
import MainNav from "../MainNav/MainNav";
import SocialNav from "../SocialNav/SocialNav";
import css from "./style.module.css";

export default function Header() {
	return (
		<header className={css.header}>
			<div className={css["header__mainnav-social"]}>
				<MainNav className={css.header__mainnav} />
				<SocialNav className={css.header__social} />
			</div>
			<BlogNav />
		</header>
	);
}
