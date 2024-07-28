import { useState } from "react";

export const useLoginForm = () => {
	const [form, setForm] = useState({
		email: "",
		password: ""
	});

	const setEmail = (email: string) => setForm({ ...form, email });
	const setPassword = (password: string) => setForm({ ...form, password });

	return {
		get: {
			email: form.email,
			password: form.password
		},
		set: { email: setEmail, password: setPassword }
	};
};
