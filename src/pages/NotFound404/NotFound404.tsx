import { Link } from "react-router-dom";
import Header from "../../App/Header/Header";
import Footer from "../../App/Footer/Footer";
import css from "./css.module.css";

export default function NotFound404() {
  return (
    <>
      <Header />
      <main className={css.main}>
        <h1>Oops!</h1>
        <p>Esta página no existe 😬</p>
        <Link to="/" style={{ color: "var(--blue)" }}>
          Ir a página principal
        </Link>
      </main>
      <Footer />
    </>
  );
}
