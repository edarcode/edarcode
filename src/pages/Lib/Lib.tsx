import Btn from "../../components/buttons/Btn/Btn";
import IconBtn from "../../components/buttons/IconBtn/IconBtn";
import css from "./css.module.css";

export default function Lib() {
	return (
		<div className={css.lib}>
			<Btn>Enviar</Btn>
			<IconBtn />
		</div>
	);
}
