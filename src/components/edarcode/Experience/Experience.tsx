import css from "./css.module.css";

export default function Experience() {
	return (
		<section className={css.experience}>
			<article>
				<h3>Experiencia</h3>
				<h4>Tutor de enseñanza Full-Stack</h4>
				<ul>
					<li>
						Tutor de enseñanza en el bootcamp de desarrollo Full Stack Henry.
					</li>
					<li>
						Coordinar grupos de estudiantes con el fin de lograr la integración
						del grupo de estudio.
					</li>
					<li>
						Guiar a los estudiantes durante las primeras etapas del curso.
					</li>
					<li>
						Asistir en la solución de ejercicios y promover la colaboración
						grupal a través del uso de pair programming.
					</li>
					<li>Proponer ideas para mejorar los procesos del Bootcamp.</li>
				</ul>
			</article>
		</section>
	);
}
