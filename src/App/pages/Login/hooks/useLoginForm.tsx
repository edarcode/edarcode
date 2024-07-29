import { useState } from "react";
import { hEmail } from "../../../../handlers/hEmail";
import { hPassword } from "../../../../handlers/hPassword";

const initialLoginForm = {
	email: { value: "", err: "" },
	password: { value: "", err: "" }
};

export const useLoginForm = () => {
	const [form, setForm] = useState(initialLoginForm);

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

	return {
		get: {
			email: form.email,
			password: form.password
		},
		set: { email: setEmail, password: setPassword },
		isValid: isValidLoginForm
	};
};
