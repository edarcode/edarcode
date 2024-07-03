import { Link } from "react-router-dom";
import { APP_PATH } from "../../constants/appPaths";

export default function ErrPage() {
	return (
		<div>
			<h1>Oops!</h1>
			<p>Ha ocurrido un error 😬</p>
			<Link to={APP_PATH.index}>ir a inicio</Link>
		</div>
	);
}
