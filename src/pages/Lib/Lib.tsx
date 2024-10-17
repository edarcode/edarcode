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
					"https://res.cloudinary.com/dvmsllkkg/image/upload/v1729197397/edarcode/ui4gal77ioq3cmrvf7bw.png",
					"https://res.cloudinary.com/dvmsllkkg/image/upload/v1728562121/edarcode/notaku_desktop.png",
					"https://res.cloudinary.com/dvmsllkkg/image/upload/v1728562121/edarcode/contacts_desktop.png"
				]}
			/>
		</div>
	);
}
