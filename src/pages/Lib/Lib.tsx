import Btn from "../../components/buttons/Btn/Btn";
import IconBtn from "../../components/buttons/IconBtn/IconBtn";
import InputText from "../../components/inputs/InputText/InputText";
import css from "./css.module.css";

export default function Lib() {
	return (
		<div className={css.lib}>
			<IconBtn />
			<Btn>Enviar</Btn>
			<InputText title="Title" />
		</div>
	);
}
