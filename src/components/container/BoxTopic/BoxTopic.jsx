import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import SubTopicsNav from "../SubTopicsNav/SubTopicsNav";
import css from "./style.module.css";

export default function BoxTopic({ topic, subTopics }) {
	const [isCollapseTopics, setIsCollapseTopics] = useState(false);

	const handleOnClickIsCollapseTopics = () => {
		setIsCollapseTopics(state => !state);
	};

	useEffect(() => {
		if (topic === "Introducción") setIsCollapseTopics(true);
	}, [topic]);

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
				style={isCollapseTopics && { transform: "rotate(90deg)" }}
				onClick={handleOnClickIsCollapseTopics}
			/>
			{isCollapseTopics && <SubTopicsNav subTopics={subTopics} />}
		</div>
	);
}
