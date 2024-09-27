import Hyperlink from "../../components/links/Hyperlink/Hyperlink";
import { USEFUL_LINKS } from "./consts";
import css from "./css.module.css";

export default function Utils() {
  return (
    <nav className={css.nav}>
      {USEFUL_LINKS.map((link) => (
        <Hyperlink key={link.href} href={link.href}>
          {link.display}
        </Hyperlink>
      ))}
    </nav>
  );
}
