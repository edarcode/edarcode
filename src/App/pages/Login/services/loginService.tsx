import { BASE_URL } from "../../../../edarcode-api/urls";

export const loginService = async (signal: AbortSignal, params: Params) => {
	const res = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(params),
		signal
	});
	return await res.json();
};

const URL = `${BASE_URL}/user/client/auth/login`;

type Params = {
	email: string;
	password: string;
};
