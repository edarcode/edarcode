import Btn from "../../../components/buttons/Btn/Btn";
import InputCheckbox from "../../../components/inputs/InputCheckbox/InputCheckbox";
import InputText from "../../../components/inputs/InputText/InputText";
import Select from "../../../components/inputs/Select/Select";
import css from "./css.module.css";

export default function DesignSystem() {
	return (
		<div className={css.design}>
			<section className={css.btns}>
				<Btn>edarcode</Btn>
				<Btn disabled>edarcode</Btn>
			</section>
			<section className={css.inputs}>
				<InputText className={css.inputText} title="Nombre" />
				<Select>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="js">JavaScript</option>
				</Select>
				<InputCheckbox title="¿Activo?" />
			</section>
		</div>
	);
}
