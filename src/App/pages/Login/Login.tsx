import Btn from "../../../components/buttons/Btn/Btn";
import InputPassword from "../../../components/inputs/InputPassword/InputPassword";
import InputText from "../../../components/inputs/InputText/InputText";
import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";
import { useLoginForm } from "./hooks/useLoginForm/useLoginForm";

export default function Login() {
	const { get, set, isValid } = useLoginForm();
	return (
		<form className={css.login}>
			<InputText
				placeholder="email"
				value={get.email.value}
				err={get.email.err}
				onChange={e => set.email(e.target.value)}
			/>
			<InputPassword
				value={get.password.value}
				err={get.password.err}
				onChange={e => set.password(e.target.value)}
			/>
			<Hyperlink href="#">Ir a registro</Hyperlink>
			<Btn disabled={!isValid}>Login</Btn>
		</form>
	);
}
