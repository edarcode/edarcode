import Btn from "../../../components/buttons/Btn/Btn";
import InputPassword from "../../../components/inputs/InputPassword/InputPassword";
import InputText from "../../../components/inputs/InputText/InputText";
import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";

export default function Login() {
	return (
		<form className={css.login}>
			<InputText placeholder="Correo" />
			<InputPassword />
			<Hyperlink href="#">Ir a registro</Hyperlink>
			<Btn disabled>Login</Btn>
		</form>
	);
}
