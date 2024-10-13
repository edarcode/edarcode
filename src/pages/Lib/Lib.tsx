import Btn from "../../components/buttons/Btn/Btn";
import IconBtn from "../../components/buttons/IconBtn/IconBtn";
import InputCheckbox from "../../components/inputs/InputCheckbox/InputCheckbox";
import InputNumber from "../../components/inputs/InputNumber/InputNumber";
import InputPassword from "../../components/inputs/InputPassword/InputPassword";
import InputTel from "../../components/inputs/InputTel/InputTel";
import InputText from "../../components/inputs/InputText/InputText";
import Select from "../../components/inputs/Select/Select";
import Paged from "../../components/paginations/Paged/Paged";
import Slider from "../../components/sliders/Slider/Slider";
import css from "./css.module.css";

export default function Lib() {
	return (
		<div className={css.lib}>
			<InputCheckbox defaultChecked={true} title="Title" />
			<IconBtn />
			<InputText title="Título" />
			<InputNumber title="Título" />
			<InputPassword title="Contraseña" />
			<InputTel title="Tel" />
			<Select
				opt={[
					{ display: "HTML", value: "html" },
					{ display: "CSS", value: "css" },
					{ display: "JavaScipt", value: "js" }
				]}
			/>
			<Btn>Enviar</Btn>
			<Paged page={1} totalPage={2} action={console.log} />
			<Slider
				images={[
					"https://via.placeholder.com/600x300?text=Image+1",
					"https://via.placeholder.com/600x300?text=Image+2",
					"https://via.placeholder.com/600x300?text=Image+3"
				]}
			/>
		</div>
	);
}
