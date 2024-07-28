import { passwordSchema } from "../../../../../../zod-schemas/passwordSchema";
import { LoginForm, SetLoginForm } from "../types";

export const hPassword = (params: Params) => {
	const { form, setForm, newPassword } = params;

	const newForm = { ...form };
	newForm.password = { value: newPassword, err: "" };

	if (!newPassword) return setForm(newForm);

	const { success, error } = passwordSchema.safeParse(newPassword);
	if (!success) {
		const msgErr = error.errors[0].message;
		newForm.password.err = msgErr;
	} else newForm.password.err = "";

	setForm(newForm);
};

type Params = {
	newPassword: string;
	form: LoginForm;
	setForm: SetLoginForm;
};
