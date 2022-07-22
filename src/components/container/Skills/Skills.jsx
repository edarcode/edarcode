import css from "./style.module.css";

const skills = [
	{
		src: "/svgs/html_color.svg",
		name: "HTML"
	},
	{
		src: "/svgs/css_color.svg",
		name: "CSS"
	},
	{
		src: "/svgs/js_color.svg",
		name: "javascript"
	},
	{
		src: "/svgs/react.svg",
		name: "react"
	},
	{
		src: "/svgs/redux.svg",
		name: "redux"
	},
	{
		src: "/svgs/node.svg",
		name: "nodejs"
	},
	{
		src: "/svgs/pgsql.svg",
		name: "postgress"
	},
	{
		src: "/svgs/sequelize.svg",
		name: "sequelize"
	},
	{
		src: "/svgs/svelte.svg",
		name: "svelte"
	}
];

export default function Skills() {
	return (
		<div className={css.skills}>
			<div className={css.skills__title}>Habilidades 😎</div>
			<div className={css.skills__items}>
				{skills.map(({ src, name }) => (
					<div key={src} className={css.skills__item}>
						<img className={css.skills__img} src={src} alt={name} />
						<span className={css.skills__name}>{name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
