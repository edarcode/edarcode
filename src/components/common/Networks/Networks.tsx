import { EDARCODE } from "../../../constants/edarcode";
import { joinClassNames } from "../../../utils/joinClassNames";
import Discord from "../../svgs/Discord";
import Github from "../../svgs/Github";
import Instagram from "../../svgs/Instagram";
import Linkedin from "../../svgs/Linkedin";
import Youtube from "../../svgs/Youtube";
import LinkTo from "../LinkTo/LinkTo";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Networks({ className }: Props) {
	const finalClassName = joinClassNames([css.networks, className]);

	return (
		<article className={finalClassName}>
			<LinkTo
				to={EDARCODE.networks.github}
				icon={Github}
				target="_blank"
				rel="noopener noreferrer"
			></LinkTo>
			<LinkTo
				to={EDARCODE.networks.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				icon={Linkedin}
			></LinkTo>
			<LinkTo
				to={EDARCODE.networks.youtube}
				target="_blank"
				rel="noopener noreferrer"
				icon={Youtube}
			></LinkTo>
			<LinkTo
				to={EDARCODE.networks.discord}
				target="_blank"
				rel="noopener noreferrer"
				icon={Discord}
			></LinkTo>
			<LinkTo
				to={EDARCODE.networks.instagram}
				target="_blank"
				rel="noopener noreferrer"
				icon={Instagram}
			></LinkTo>
		</article>
	);
}
