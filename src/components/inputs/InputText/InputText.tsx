import { joinClassNames } from "../../../services/joinClassNames";
import Input from "./components/Input/Input";
import css from "./css.module.css";
import { Props } from "./types";

export default function InputText(props: Props) {
	const { className, title, err, loading, success, async, ...extraProps } =
		props;

	const finalClassName = joinClassNames([css.label, className]);

	return (
		<label className={finalClassName}>
			{title && <span className={css.title}>{title}</span>}

			<Input
				{...extraProps}
				err={err}
				async={async}
				loading={loading}
				success={success}
			/>

			{err && <p className={css.err}>{err}</p>}
		</label>
	);
}
