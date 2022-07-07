import WhoAreYou from "../../components/container/WhoAreYou/WhoAreYou";
import css from "./style.module.css";

export default function Home() {
	return (
		<main className={css.home}>
			<WhoAreYou />
		</main>
	);
}
