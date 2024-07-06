type Props = {
	project: Project;
};

type Project = {
	title: string;
	description: string;
	tools: string;
};

export default function Project({ project }: Props) {
	const { title, description, tools } = project;
	return (
		<article>
			<h6>{title}</h6>
			<p>{description}</p>
			<span>{tools}</span>
		</article>
	);
}
