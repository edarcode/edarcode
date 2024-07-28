import { useState } from "react";
import { LoginForm } from "./types";
import { hEmail } from "./utils/hEmail";
import { hPassword } from "./utils/hPassword";

const initialLoginForm: LoginForm = {
	email: { value: "", err: "" },
	password: { value: "", err: "" }
};

export const useLoginForm = () => {
	const [form, setForm] = useState(initialLoginForm);

	const setEmail = (newEmail: string) => {
		hEmail({ newEmail, form, setForm });
	};

	const setPassword = (newPassword: string) => {
		hPassword({ newPassword, form, setForm });
	};

	return {
		get: {
			email: form.email,
			password: form.password
		},
		set: { email: setEmail, password: setPassword }
	};
};
