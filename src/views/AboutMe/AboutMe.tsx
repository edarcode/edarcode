import Banner from "../../components/edarcode/Banner/Banner";
import Skills from "../../components/edarcode/Skills/Skills";
import css from "./css.module.css";

export default function AboutMe() {
	return (
		<div className={css.about}>
			<Banner />
			<Skills />
		</div>
	);
}
