import css from "./css.module.css";
import err from "./icons/err.svg";
import loading from "./icons/loading.svg";
import success from "./icons/success.svg";

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
	err: <img src={err} alt="error" className={css.icon} />,
	loading: <img src={loading} alt="cargando" className={css.icon} />,
	success: <img src={success} alt="está ok" className={css.icon} />
};
