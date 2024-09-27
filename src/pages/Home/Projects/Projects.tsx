import { EDARCODE } from "../../../database/edarcode";
import ProjectCard from "./ProjectCard/ProjectCard";
import css from "./css.module.css";

export default function Projects() {
  return (
    <section className={css.projects}>
      <h3>Proyectos</h3>
      <div className={css.cards}>
        <ProjectCard project={EDARCODE.projects[0]} />
      </div>
    </section>
  );
}
