import TopicLink from "../../common/TopicLink/TopicLink";
import css from "./style.module.css";

export default function SubTopicsNav({ subTopics }) {
	return (
		<nav className={css.subtopics}>
			{subTopics &&
				subTopics.map(item => <TopicLink key={item.name} {...item} />)}
		</nav>
	);
}
