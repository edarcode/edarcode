import css from "./css.module.css";
import Err from "./Err/Err";
import Spinner from "./Spinner/Spinner";
import { joinClass } from "./utils/joinClass";
import { Props } from "./types";
import { BTN_KIND } from "./kinds";

export default function Btn(props: Props) {
	const {
		isVisible = true,
		kind,
		className,
		loading,
		err,
		children,
		...extraProps
	} = props;

	const finalClass = joinClass([
		css.btn,
		className,
		err && css.btn__err,
		kind && BTN_KIND[kind]
	]);

	if (!isVisible) return null;
	return (
		<button {...extraProps} className={finalClass}>
			{!loading && children}
			<Spinner isVisible={loading} />
			<Err isVisible={err} />
		</button>
	);
}
