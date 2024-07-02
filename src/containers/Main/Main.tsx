import { joinClassNames } from "../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Main({ className }: Props) {
	const finalClassName = joinClassNames([css.header, className]);
	return <main className={finalClassName}>Main</main>;
}
