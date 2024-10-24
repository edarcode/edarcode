export type Props = {
	project: Project;
};

type Project = {
	title: string;
	deploy: string;
	description: string;
	tools: string;
	imgs: Imgs;
	dev: string;
};

type Imgs = {
	mobile: string;
	pc: string;
};
