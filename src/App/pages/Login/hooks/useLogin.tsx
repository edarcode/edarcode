import { useEffect, useState } from "react";
import { hEmail } from "../../../../form-handlers/hEmail";
import { hPassword } from "../../../../form-handlers/hPassword";
import { loginService } from "../services/loginService";

const initLogin = {
	form: {
		email: { value: "", err: "" },
		password: { value: "", err: "" }
	},
	state: { loading: false, success: false, err: "" }
};

export const useLogin = () => {
	const [login, setLogin] = useState(initLogin);
	const form = login.form;
	const state = login.state;

	useEffect(() => {
		if (!login.state.loading) return;
		const controller = new AbortController();

		loginService(controller.signal, {
			email: form.email.value,
			password: form.password.value
		})
			.then(() => {
				setLogin({ ...login, state: { ...initLogin.state, success: true } });
			})
			.catch(() => {
				setLogin({ ...login, state: { ...initLogin.state, err: "Err login" } });
			})
			.finally(() => {
				setLogin(login => ({
					...login,
					state: { ...login.state, loading: false }
				}));
			});

		return () => controller.abort();
	}, [state.loading]);

	const isValidLogin =
		!form.email.err &&
		!!form.email.value &&
		!form.password.err &&
		!!form.password.value &&
		!state.loading;

	const setEmail = (newValue: string) => {
		const newEmail = hEmail(newValue, form.email);
		const newLogin = { ...login };
		newLogin.form.email = newEmail;
		setLogin(newLogin);
	};

	const setPassword = (newValue: string) => {
		const newEmail = hPassword(newValue, form.password);
		const newLogin = { ...login };
		newLogin.form.password = newEmail;
		setLogin(newLogin);
	};

	const reqToken = () => {
		setLogin({ ...login, state: { loading: true, err: "", success: false } });
	};

	return {
		form: {
			email: form.email,
			password: form.password
		},
		set: { email: setEmail, password: setPassword },
		state: { loading: state.loading, success: state.success, err: state.err },
		isValid: isValidLogin,
		reqToken
	};
};
