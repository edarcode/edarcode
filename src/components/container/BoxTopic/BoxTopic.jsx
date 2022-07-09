import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import SubTopicsNav from "../SubTopicsNav/SubTopicsNav";
import css from "./style.module.css";

export default function BoxTopic({ name, subTopics }) {
	const [isCollapseNav, setIsCollapseNav] = useState(false);

	const handleClickIsCollapse = () => {
		setIsCollapseNav(isCollapseNav => !isCollapseNav);
	};

	return (
		<>
			<div className={css.topic} onClick={handleClickIsCollapse}>
				<h6 className={css.topic__name}>{name}</h6>
				<AiOutlineArrowRight className={css.topic__arrow} />
			</div>
			{isCollapseNav && <SubTopicsNav subTopics={subTopics} />}
		</>
	);
}
