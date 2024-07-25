import Btn from "../../../components/buttons/Btn/Btn";
import InputText from "../../../components/inputs/InputText/InputText";
import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";

export default function Login() {
	return (
		<article className={css.login}>
			<InputText placeholder="Correo" />

			<Hyperlink href="#">Ir a registro</Hyperlink>
			<Btn disabled>Login</Btn>
		</article>
	);
}
