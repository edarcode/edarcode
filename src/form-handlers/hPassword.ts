import { passwordSchema } from "../zod-schemas/passwordSchema";

export const hPassword = <T extends BaseForm>(params: Params<T>) => {
	const { newPassword, form } = params;

	const newForm = { ...form };
	newForm.password = { value: newPassword, err: "" };

	if (!newPassword) return newForm;

	const { success, error } = passwordSchema.safeParse(newPassword);
	if (!success) {
		const msgErr = error.errors[0].message;
		newForm.password.err = msgErr;
	} else newForm.password.err = "";

	return newForm;
};

type BaseForm = { password: { value: string; err: string } };
type Form<T extends BaseForm> = T;
type Params<T extends BaseForm> = {
	newPassword: string;
	form: Form<T>;
};
