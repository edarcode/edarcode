import css from "./css.module.css";

export default function Err({ isVisible, ...extraProps }: Props) {
	if (!isVisible) return null;
	return (
		<svg
			className={css.err}
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="64"
			{...extraProps}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
			></path>
		</svg>
	);
}

interface Props extends React.SVGProps<SVGSVGElement> {
	isVisible?: boolean;
}
