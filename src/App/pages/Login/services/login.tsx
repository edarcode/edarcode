import { BASE_URL } from "../../../../edarcode-api/urls";

export const login = async (params: Params) => {
	const res = await fetch(URL, {
		method: "POST",
		body: JSON.stringify(params)
	});
	return await res.json();
};

const URL = `${BASE_URL}/user/client/auth/login`;

type Params = {
	email: string;
	password: string;
};
