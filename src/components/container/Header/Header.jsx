import Banner from "../../common/Banner/Banner";
import BlogNav from "../BlogNav/BlogNav";
import MainNav from "../MainNav/MainNav";
import SocialNav from "../SocialNav/SocialNav";
import css from "./style.module.css";

export default function Header() {
	return (
		<header className={css.header}>
			<MainNav />
			<SocialNav />
			<BlogNav />
			<Banner />
		</header>
	);
}
