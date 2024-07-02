import { useState } from "react";
import BtnIcon from "../../components/buttons/BtnIcon/BtnIcon";
import Lines from "../../components/svgs/Lines";
import { joinClassNames } from "../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Aside({ className }: Props) {
	const [isCollapsedAside, setIsCollapsedAside] = useState(true);

	const finalClassName = joinClassNames([css.aside, className]);
	const hCollapsedAside = () => setIsCollapsedAside(!isCollapsedAside);

	return (
		<aside className={finalClassName}>
			<BtnIcon onClick={hCollapsedAside} isVisible={isCollapsedAside} />
			<BtnIcon
				onClick={hCollapsedAside}
				icon={Lines}
				isVisible={!isCollapsedAside}
			/>
		</aside>
	);
}
