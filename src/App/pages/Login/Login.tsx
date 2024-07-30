import Btn from "../../../components/buttons/Btn/Btn";
import InputPassword from "../../../components/inputs/InputPassword/InputPassword";
import InputText from "../../../components/inputs/InputText/InputText";
import Hyperlink from "../../../components/links/Hyperlink/Hyperlink";
import { Event } from "../../../types";
import css from "./css.module.css";
import { useLogin } from "./hooks/useLogin";

export default function Login() {
	const { form, state, set, isValid, reqToken } = useLogin();

	const hSubmit = (e: Event) => {
		e.preventDefault();
		if (!isValid) return;
		reqToken();
	};

	return (
		<form className={css.login} onSubmit={hSubmit}>
			<InputText
				placeholder="email"
				value={form.email.value}
				err={form.email.err}
				onChange={e => set.email(e.target.value)}
			/>
			<InputPassword
				value={form.password.value}
				err={form.password.err}
				onChange={e => set.password(e.target.value)}
			/>
			<Hyperlink href="#">Ir a registro</Hyperlink>
			<Btn disabled={!isValid}>{state.loading ? "Cargando..." : "Login"}</Btn>
			{state.err && <span>{state.err}</span>}
		</form>
	);
}
