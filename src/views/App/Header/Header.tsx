import LinkTo from "../../../components/common/LinkTo/LinkTo";
import Discord from "../../../components/svgs/Discord";
import Github from "../../../components/svgs/Github";
import Instagram from "../../../components/svgs/Instagram";
import Linkedin from "../../../components/svgs/Linkedin";
import Youtube from "../../../components/svgs/Youtube";
import { EDARCODE } from "../../../constants/edarcode";
import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";
import { Props } from "./types";

export default function Header({ className }: Props) {
	const finalClassName = joinClassNames([css.header, className]);
	return (
		<header className={finalClassName}>
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
		</header>
	);
}
