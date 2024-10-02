import Btn from "../../components/buttons/Btn/Btn";
import IconBtn from "../../components/buttons/IconBtn/IconBtn";
import InputCheckbox from "../../components/inputs/InputCheckbox/InputCheckbox";
import InputNumber from "../../components/inputs/InputNumber/InputNumber";
import InputPassword from "../../components/inputs/InputPassword/InputPassword";
import InputText from "../../components/inputs/InputText/InputText";
import Select from "../../components/inputs/Select/Select";
import css from "./css.module.css";

export default function Lib() {
	return (
		<div className={css.lib}>
			<InputCheckbox defaultChecked={true} title="Title" />
			<IconBtn />
			<InputText title="Title" err="err" />
			<InputPassword err="err" />
			<InputNumber />
			<Select
				opt={[
					{ display: "HTML", value: "html" },
					{ display: "CSS", value: "css" },
					{ display: "JavaScipt", value: "js" }
				]}
			/>
			<Btn>Enviar</Btn>
		</div>
	);
}
