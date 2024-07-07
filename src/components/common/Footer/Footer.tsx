import { joinClassNames } from "../../../utils/joinClassNames";
import css from "./css.module.css";
import { Props } from "./types";

export default function Footer({ className }: Props) {
	const finalClassName = joinClassNames([css.footer, className]);
	return (
		<footer className={finalClassName}>
			<div className={css.gmail}>
				<p>
					edarcode@
					<img src="/networks/gmail.svg" alt="gmail" />
					.com
				</p>
				<p>© Casi todos los derechos reservados.</p>
			</div>
		</footer>
	);
}
