import { BASE_URL } from "../../../../edarcode-api/urls";

export const loginService = async (signal: AbortSignal, params: Params) => {
	console.log(params);
	const res = await fetch(URL, {
		signal,
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(params)
	});
	return await res.json();
};

const URL = `${BASE_URL}/user/client/auth/login`;

type Params = {
	email: string;
	password: string;
};
