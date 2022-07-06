import {
	discord,
	github,
	instagram,
	linkedin,
	youtube
} from "../../../constants/urls";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function SocialNav() {
	return (
		<nav className={css.social}>
			<BoxLink a path={github} img="/github.svg" color="hsl(0, 0%, 13%)" />
			<BoxLink a path={linkedin} img="/linkedin.svg" color="royalblue" />
			<BoxLink a path={youtube} img="/youtube.svg" color="red" />
			<BoxLink a path={instagram} img="/instagram.svg" color="magenta" />
			<BoxLink a path={discord} img="/discord.svg" color="hsl(266, 45%, 40%)" />
		</nav>
	);
}
