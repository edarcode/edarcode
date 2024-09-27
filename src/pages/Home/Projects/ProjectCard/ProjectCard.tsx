import Hyperlink from "../../../../components/links/Hyperlink/Hyperlink";
import css from "./css.module.css";
import { Props } from "./types";

export default function ProjectCard({ project }: Props) {
  const { title, description, tools } = project;
  return (
    <article className={css.project}>
      <h4 className={css.title}>{title}</h4>
      <p>{description}</p>
      <p>Tecnologías: {tools}</p>
      <Hyperlink href={project.deploy}>Deploy</Hyperlink>
    </article>
  );
}
