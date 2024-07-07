import Banner from "../../components/edarcode/Banner/Banner";
import Experiences from "../../components/edarcode/Experiences/Experiences";
import Skills from "../../components/edarcode/Skills/Skills";
import Projects from "../Projects/Projects";
import css from "./css.module.css";

export default function AboutMe() {
	return (
		<section className={css.about}>
			<Banner />
			<Experiences />
			<Projects />
			<Skills />
		</section>
	);
}
