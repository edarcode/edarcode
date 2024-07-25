import { joinClassNames } from "../../../../services/joinClassNames";
import css from "./css.module.css";
import EyeIcon from "./EyeIcon/EyeIcon";

interface Props {
	err?: string;
}

export default function Input(props: Props) {
	const { err, ...extraProps } = props;

	const finalClassNameInput = joinClassNames([
		css.input,
		err && css.input__err
	]);

	return (
		<label className={css.label}>
			<input
				placeholder="password"
				{...extraProps}
				type="password"
				className={finalClassNameInput}
			></input>
			<EyeIcon />
		</label>
	);
}
