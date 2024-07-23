import css from "./css.module.css";

type Props = {
	async?: boolean;
	err?: string;
	loading?: boolean;
	success?: boolean;
};

export default function State(props: Props) {
	const { async, err, loading, success } = props;

	const isVisible = async && (err || loading || success);

	if (!isVisible) return null;

	if (err) return ICON.err;
	if (loading) return ICON.loading;

	return ICON.success;
}

const ICON = {
	err: <img src="/svg/state/err.svg" alt="error" className={css.err} />,
	loading: (
		<img src="/svg/state/loading.svg" alt="cargando" className={css.loading} />
	),
	success: (
		<img src="/svg/state/success.svg" alt="cargando" className={css.success} />
	)
};
