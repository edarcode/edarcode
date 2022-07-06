import {
	discord,
	github,
	instagram,
	linkedin,
	youtube
} from "../../../constants/urls";
import BoxLink from "../../common/BoxLink/BoxLink";
import css from "./style.module.css";

export default function SocialNav({ className }) {
	return (
		<nav className={`${css.social} ${className}`}>
			<BoxLink
				a
				path={github}
				img="/github.svg"
				color="black"
				className={css.social__link}
			/>
			<BoxLink
				a
				path={linkedin}
				img="/linkedin.svg"
				color="royalblue"
				className={css.social__link}
			/>
			<BoxLink
				a
				path={youtube}
				img="/youtube.svg"
				color="red"
				className={css.social__link}
			/>
			<BoxLink
				a
				path={instagram}
				img="/instagram.svg"
				color="magenta"
				className={css.social__link}
			/>
			<BoxLink
				a
				path={discord}
				img="/discord.svg"
				color="hsl(266, 45%, 40%)"
				className={css.social__link}
			/>
		</nav>
	);
}
