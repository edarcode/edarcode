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
		name: "Javascript"
	},
	{
		src: "/svgs/react.svg",
		name: "React"
	},
	{
		src: "/svgs/redux.svg",
		name: "Redux"
	},
	{
		src: "/svgs/node.svg",
		name: "Nodejs"
	},
	{
		src: "/svgs/pgsql.svg",
		name: "PostgreSQL"
	},
	{
		src: "/svgs/sequelize.svg",
		name: "Sequelize"
	},
	{
		src: "/svgs/typescript.svg",
		name: "Typescript"
	},
	{
		src: "/svgs/prisma.svg",
		name: "Prisma"
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
