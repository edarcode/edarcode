import { joinClassNames } from "../../../services/joinClassNames.js";
import css from "./css.module.css";
import Arrow from "./icons/Arrow.js";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select(props: Props) {
	const { className, ...extraProps } = props;

	const finalClassName = joinClassNames([css.label, className]);

	return (
		<label className={finalClassName}>
			<select {...extraProps} className={css.select}></select>
			<Arrow className={css.arrow} />
		</label>
	);
}
