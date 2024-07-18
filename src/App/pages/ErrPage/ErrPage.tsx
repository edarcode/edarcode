import { Link } from "react-router-dom";
import { PATH } from "../../router";

export default function ErrPage() {
	return (
		<div>
			<h1>Oops!</h1>
			<p>Ha ocurrido un error 😬</p>
			<Link to={PATH.AboutMe}>Ir a página principal</Link>
		</div>
	);
}
