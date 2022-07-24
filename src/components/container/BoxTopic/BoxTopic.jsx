import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import SubTopicsNav from "../SubTopicsNav/SubTopicsNav";
import css from "./style.module.css";

export default function BoxTopic({ topic, subTopics }) {
	const [isCollapseTopics, setIsCollapseTopics] = useState(false);
	const handleOnClickIsCollapseTopics = e => {
		setIsCollapseTopics(state => !state);
	};
	return (
		<div className={css.topic}>
			<span
				className={css.topic__title}
				onClick={handleOnClickIsCollapseTopics}
			>
				{topic}
			</span>
			<FaArrowCircleRight
				className={css.topic__arrow}
				onClick={handleOnClickIsCollapseTopics}
			/>
			{isCollapseTopics && <SubTopicsNav subTopics={subTopics} />}
		</div>
	);
}
