import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./modal.module.css";
import popUp from "../../images/popUpDeposit.png";

const modalRoot = document.querySelector("#modal");

export default function Modal3Wins({ showModal, winingArr, t }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    const changeLink = () => {
      const link = document.getElementById("link");
      link.href = link.href + window.location.search;
    };
    changeLink();

    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  const renderBonus = (data) => {
    if (data === 1) {
      return (
        <div key={data}>
          <p className={s.bonusValue}>{t("winingSet.firstWin.value")}</p>
          <p className={s.bonusDescription}>{t("winingSet.firstWin.name")}</p>
        </div>
      );
    }
    if (data === 2) {
      return (
        <div key={data}>
          <p className={s.bonusValue}>{t("winingSet.secondWin.value")}</p>
          <p className={s.bonusDescription}>{t("winingSet.secondWin.name")}</p>
        </div>
      );
    }
  };

  return createPortal(
    <div className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}>
      <div className={s.container}>
        <img className={s.popUp} src={popUp} alt="popup bg" />
        <div className={s.description}>
          <p className={s.text}>{t("youWin")}</p>
          <div className={s.bonus}>
            {winingArr.map((item) => renderBonus(item))}
          </div>
        </div>
        <a className={s.button} id="link" href="#">
          {t("get")}
        </a>
      </div>
    </div>,
    modalRoot
  );
}
