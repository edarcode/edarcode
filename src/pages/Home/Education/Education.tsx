import Autodidact from "./Autodidact/Autodidact";
import css from "./css.module.css";
import Henry from "./Henry/Henry";
import NoCountry from "./NoCountry/NoCountry";
import Univercity from "./Univercity/Univercity";

export default function Education() {
	return (
		<section className={css.education}>
			<h3>Educación</h3>
			<Henry />
			<NoCountry />
			<Univercity />
			<Autodidact />
		</section>
	);
}
