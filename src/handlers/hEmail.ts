import { emailSchema } from "../zod-schemas/emailSchema";

export const hEmail = <T extends BaseForm>(params: Params<T>) => {
	const { newEmail, form } = params;

	const newForm = { ...form };
	newForm.email = { value: newEmail, err: "" };

	if (!newEmail) return newForm;

	const { success, error } = emailSchema.safeParse(newEmail);
	if (!success) {
		const msgErr = error.errors[0].message;
		newForm.email.err = msgErr;
	} else newForm.email.err = "";

	return newForm;
};

type BaseForm = { email: { value: string; err: string } };
type Form<T extends BaseForm> = T;

type Params<T extends BaseForm> = {
	newEmail: string;
	form: Form<T>;
};
