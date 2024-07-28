export type LoginForm = {
	email: {
		value: string;
		err: string;
	};
	password: {
		value: string;
		err: string;
	};
};

export type SetLoginForm = React.Dispatch<React.SetStateAction<LoginForm>>;
