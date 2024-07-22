import Btn from "../../../components/buttons/Btn/Btn";
import InputText from "../../../components/inputs/InputText/InputText";
import css from "./css.module.css";

export default function DesignSystem() {
	return (
		<div className={css.design}>
			<section className={css.btns}>
				<Btn>edarcode</Btn>
				<Btn disabled>edarcode</Btn>
			</section>
			<section className={css.inputs}>
				<InputText className={css.inputText} />
			</section>
		</div>
	);
}
