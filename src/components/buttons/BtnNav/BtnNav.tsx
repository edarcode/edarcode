import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
	onClick?: () => void;
	isCross?: boolean;
};

export default function BtnNav({
	className,
	onClick,
	isCross,
	...props
}: Props) {
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
			onClick={onClick}
		></button>
	);
}
