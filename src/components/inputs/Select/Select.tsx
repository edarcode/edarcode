import { joinClassNames } from "../../../services/joinClassNames.js";
import css from "./css.module.css";
import arrow from "./icons/arrow.svg";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
}

export default function Select(props: Props) {
	const { className, ...extraProps } = props;

	const finalClassName = joinClassNames([css.label, className]);

	return (
		<label className={finalClassName}>
			<select {...extraProps} className={css.select}></select>
			<img src={arrow} alt="desplegar select" className={css.arrow} />
		</label>
	);
}
