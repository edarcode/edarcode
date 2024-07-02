import { joinClassNames } from "../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Aside({ className }: Props) {
	const finalClassName = joinClassNames([css.header, className]);
	return <aside className={finalClassName}>Aside</aside>;
}
