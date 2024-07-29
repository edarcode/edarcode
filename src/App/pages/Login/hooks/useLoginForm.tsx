import { useEffect, useState } from "react";
import { hEmail } from "../../../../handlers/hEmail";
import { hPassword } from "../../../../handlers/hPassword";
import { loginService } from "../services/loginService";

const initialLoginForm = {
	email: { value: "", err: "" },
	password: { value: "", err: "" },
	state: {
		loading: false,
		success: false,
		err: false
	}
};

export const useLoginForm = () => {
	const [form, setForm] = useState(initialLoginForm);

	useEffect(() => {
		if (!form.state.loading) return;
		const controller = new AbortController();

		loginService(controller.signal, {
			email: form.email.value,
			password: form.password.value
		})
			.then(() => {})
			.catch(() => {})
			.finally(() => {});

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

	const send = () =>
		setForm({ ...form, state: { loading: true, err: false, success: false } });

	return {
		get: {
			email: form.email,
			password: form.password
		},
		set: { email: setEmail, password: setPassword },
		isValid: isValidLoginForm,
		send
	};
};
