import { joinClassNames } from "../../../services/joinClassNames";
import css from "./css.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	title?: string;
	err?: string;
}

export default function InputText(props: Props) {
	const { className, title, err, ...extraProps } = props;

	const finalClassName = joinClassNames([css.label, className]);
	const finalClassInput = joinClassNames([css.input, err && css.input__err]);

	return (
		<label className={finalClassName}>
			{title && <span className={css.title}>{title}</span>}
			<input
				placeholder="edarcode"
				{...extraProps}
				type="text"
				className={finalClassInput}
			></input>
			{err && <p className={css.err}>{err}</p>}
		</label>
	);
}
