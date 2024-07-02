import { joinClassNames } from "../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Header({ className }: Props) {
	const finalClassName = joinClassNames([css.header, className]);
	return <header className={finalClassName}>header</header>;
}
