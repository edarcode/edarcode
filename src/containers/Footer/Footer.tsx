import { joinClassNames } from "../../utils/joinClassNames";
import css from "./css.module.css";

type Props = {
	className?: string;
};

export default function Footer({ className }: Props) {
	const finalClassName = joinClassNames([css.footer, className]);
	return <footer className={finalClassName}>Footer</footer>;
}
