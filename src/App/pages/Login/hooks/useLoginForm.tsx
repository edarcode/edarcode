import { useEffect, useState } from "react";
import { hEmail } from "../../../../form-handlers/hEmail";
import { hPassword } from "../../../../form-handlers/hPassword";
import { loginService } from "../services/loginService";

const initialForm = {
	email: { value: "", err: "" },
	password: { value: "", err: "" },
	state: { loading: false, success: false, err: "" }
};

export const useLoginForm = () => {
	const [form, setForm] = useState(initialForm);

	useEffect(() => {
		if (!form.state.loading) return;
		const controller = new AbortController();

		loginService(controller.signal, {
			email: form.email.value,
			password: form.password.value
		})
			.then(res => {
				console.log(res);
				setForm({ ...form, state: { ...initialForm.state, success: true } });
			})
			.catch(err => {
				console.log(err);
				setForm({ ...form, state: { ...initialForm.state, err: "err login" } });
			})
			.finally(() => {
				setForm({ ...form, state: { ...form.state, loading: false } });
			});

		return () => controller.abort();
	}, [form.state.loading]);

	const isValidLoginForm =
		!form.email.err &&
		!!form.email.value &&
		!form.password.err &&
		!!form.password.value;

	const setEmail = (newEmail: string) => {
		const newForm = hEmail({ newEmail, form });
		setForm(newForm);
	};

	const setPassword = (newPassword: string) => {
		const newForm = hPassword({ newPassword, form });
		setForm(newForm);
	};

	const reqToken = () => {
		setForm({ ...form, state: { loading: true, err: "", success: false } });
	};

	return {
		get: {
			email: form.email,
			password: form.password
		},
		set: { email: setEmail, password: setPassword },
		isValid: isValidLoginForm,
		reqToken
	};
};
