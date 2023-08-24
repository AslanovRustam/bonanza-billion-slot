import { useState } from "react";
import Slots2Spin from "../Slots/Slots2Spin";
import WiningSet from "../WiningSet/WiningSet";
import s from "./main.module.css";

export default function Main({ t }) {
  const [winingArr, setWiningArr] = useState([]);

  return (
    <main className={s.main}>
      <h1 className={s.title} data-text={t("main.bonuses")}>
        {t("main.bonuses")}
      </h1>
      <p className={s.subTitle}>{t("main.wait4you")} </p>
      <Slots2Spin winingArr={winingArr} setWiningArr={setWiningArr} t={t} />
      <WiningSet winingArr={winingArr} t={t} />
    </main>
  );
}
