import { useContext } from "react";
import { IsCollapseAside } from "../../../contexts/IsCollapseAside";
import BoxTopic from "../BoxTopic/BoxTopic";
import css from "./style.module.css";

export default function Aside({ data }) {
	const { isCollapseMenu } = useContext(IsCollapseAside);

	if (!isCollapseMenu) return null;
	return (
		isCollapseMenu && (
			<aside className={css.aside}>
				<span>{data.topic}</span>
				<div className={css.aside__topics}>
					{data.subTopics.map(item => (
						<BoxTopic key={item.topic} {...item} />
					))}
				</div>
			</aside>
		)
	);
}
