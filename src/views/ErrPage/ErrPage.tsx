import { Link } from "react-router-dom";
import { APP } from "../../constants/paths";

export default function ErrPage() {
	return (
		<div>
			<h1>Oops!</h1>
			<p>Ha ocurrido un error 😬</p>
			<Link to={APP}>ir a inicio</Link>
		</div>
	);
}
