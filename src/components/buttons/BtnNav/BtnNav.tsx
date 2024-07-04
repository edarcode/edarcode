import { useState } from "react";
import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
	onClick?: () => void;
};

export default function BtnNav({ className, onClick, ...props }: Props) {
	const [isCross, setIsCross] = useState(false);
	const finalClassName = joinClassNames([
		css.btn,
		isCross && css.cross,
		className
	]);

	return (
		<button
			{...props}
			type="button"
			className={finalClassName}
			onClick={() => {
				setIsCross(!isCross);
				onClick && onClick();
			}}
		></button>
	);
}
