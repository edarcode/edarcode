import { useState } from "react";
import css from "./css.module.css";
import ClosedEye from "./icons/ClosedEye";
import OpenEye from "./icons/OpenEye";

export default function EyeIcon() {
	const [isVisiblePass, setIsVisiblePass] = useState(false);

	const hVisibleEye = () => setIsVisiblePass(!isVisiblePass);

	if (isVisiblePass)
		return <OpenEye className={css.eye} onClick={hVisibleEye} />;
	return <ClosedEye className={css.eye} onClick={hVisibleEye} />;
}
