import Btn from "../../../components/buttons/Btn/Btn";
import css from "./css.module.css";

export default function DesignSystem() {
	return (
		<div className={css.design}>
			<section className={css.btns}>
				<Btn>edarcode</Btn>
				<Btn disabled>edarcode</Btn>
			</section>
		</div>
	);
}
