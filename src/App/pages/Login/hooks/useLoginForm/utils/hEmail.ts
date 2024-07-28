import { emailSchema } from "../../../../../../zod-schemas/emailSchema";
import { LoginForm, SetLoginForm } from "../types";

export const hEmail = (params: Params) => {
	const { form, newEmail, setForm } = params;

	const newForm = { ...form };
	newForm.email = { value: newEmail, err: "" };

	if (!newEmail) return setForm(newForm);

	const { success, error } = emailSchema.safeParse(newEmail);
	if (!success) {
		const msgErr = error.errors[0].message;
		newForm.email.err = msgErr;
	} else newForm.email.err = "";

	setForm(newForm);
};

type Params = {
	newEmail: string;
	form: LoginForm;
	setForm: SetLoginForm;
};
