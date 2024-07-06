type Props = {
	project: Project;
};

type Project = {
	title: string;
	deploy: string;
	description: string;
	tools: string;
	imgs: Imgs;
};

type Imgs = {
	mobile: string;
	pc: string;
};

export default function Project({ project }: Props) {
	const { title, description, tools, deploy, imgs } = project;
	const { mobile, pc } = imgs;
	return (
		<article>
			<h6>{title}</h6>
			<p>{description}</p>
			<img src={mobile} alt="vista para mobile" />
			<img src={pc} alt="vista para pc" />
			<p>{tools}</p>
			<p>{deploy}</p>
		</article>
	);
}
