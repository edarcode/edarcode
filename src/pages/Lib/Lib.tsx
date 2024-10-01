import Btn from "../../components/buttons/Btn/Btn";
import IconBtn from "../../components/buttons/IconBtn/IconBtn";
import InputText from "../../components/inputs/InputText/InputText";
import Select from "../../components/inputs/Select/Select";
import css from "./css.module.css";

export default function Lib() {
	return (
		<div className={css.lib}>
			<IconBtn />
			<Btn>Enviar</Btn>
			<InputText title="Title" />
			<Select
				opt={[
					{ display: "HTML", value: "html" },
					{ display: "CSS", value: "css" },
					{ display: "JavaScipt", value: "js" }
				]}
			/>
		</div>
	);
}
