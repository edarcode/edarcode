import { useEffect } from "react";
import { loginService } from "../services/loginService";
import { Login, SetLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";

export function useLoginService(params: UseLoginService) {
	const { login, setLogin } = params;
	const { form, state } = login;
	const navigate = useNavigate();

	useEffect(() => {
		if (!login.state.loading) return;

		const controller = new AbortController();
		const body = { email: form.email.value, password: form.password.value };
		loginService(controller.signal, body)
			.then(res => {
				localStorage.setItem("login", res.token);
				navigate("/");
			})
			.catch(() => {
				setLogin({ ...login, state: { loading: false, err: true } });
			});

		return () => controller.abort();
	}, [state.loading]);
}

type UseLoginService = {
	login: Login;
	setLogin: SetLogin;
};
