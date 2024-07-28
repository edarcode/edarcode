import Btn from "../../../components/buttons/Btn/Btn";
import InputPassword from "../../../components/inputs/InputPassword/InputPassword";
import InputText from "../../../components/inputs/InputText/InputText";
import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";
import { useLoginForm } from "./hooks/useLoginForm";

export default function Login() {
	const { get, set } = useLoginForm();
	return (
		<form className={css.login}>
			<InputText
				placeholder="Correo"
				value={get.email}
				onChange={e => set.email(e.target.value)}
			/>
			<InputPassword
				value={get.password}
				onChange={e => set.password(e.target.value)}
			/>
			<Hyperlink href="#">Ir a registro</Hyperlink>
			<Btn disabled>Login</Btn>
		</form>
	);
}
