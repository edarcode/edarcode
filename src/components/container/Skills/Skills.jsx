import css from "./style.module.css";

const skills = [
	{
		src: "/html_color.svg",
		name: "HTML"
	},
	{
		src: "/css_color.svg",
		name: "CSS"
	},
	{
		src: "/js_color.svg",
		name: "javascript"
	},
	{
		src: "/react.svg",
		name: "react"
	},
	{
		src: "/redux.svg",
		name: "redux"
	},
	{
		src: "/node.svg",
		name: "nodejs"
	},
	{
		src: "/pgsql.svg",
		name: "postgress"
	},
	{
		src: "/sequelize.svg",
		name: "sequelize"
	},
	{
		src: "/svelte.svg",
		name: "svelte"
	}
];

export default function Skills() {
	return (
		<div className={css.skills}>
			<h6 className={css.skills__title}>Habilidades 😎</h6>
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
