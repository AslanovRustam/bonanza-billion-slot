import s from "./footer.module.css";
import pay1 from "../../images/pays/visa.png";
import pay2 from "../../images/pays/mastercard.png";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.list}>
        <li className={s.item}>
          <img className={s.icon} src={pay1} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay2} alt="pay" />
        </li>
      </ul>
    </footer>
  );
}
