import Hyperlink from "../links/Hyperlink/Hyperlink";
import css from "./css.module.css";
import { Props } from "./types";

export default function Project({ project }: Props) {
	const { title, description, tools, deploy, imgs } = project;
	const { mobile, pc } = imgs;
	return (
		<article className={css.project}>
			<h4 className={css.title}>{title}</h4>
			<p>{description}</p>
			<p>{tools}</p>
			<Hyperlink href={deploy}>Sitio web</Hyperlink>
			<img className={css.imgMobile} src={mobile} alt="vista para mobile" />
			<img className={css.imgPc} src={pc} alt="vista para pc" />
		</article>
	);
}
