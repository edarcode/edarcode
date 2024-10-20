import css from "./css.module.css";
import Input from "./Input/Input";
import { Props } from "./types";
import { joinClass } from "./utils/joinClass";

export default function InputPassword(props: Props) {
	const { className, err, title, ...extraProps } = props;

	const finalClassName = joinClass([css.label, className]);

	return (
		<label className={finalClassName}>
			{title && <span className={css.title}>{title}</span>}

			<Input {...extraProps} err={err} />

			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}
