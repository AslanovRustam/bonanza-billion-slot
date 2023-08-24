import s from "./winingSet.module.css";
import firstSpinBg from "../../images/spin1.png";
import secondSpinBg from "../../images/spin2.png";

export default function WiningSet({ winingArr, t }) {
  const renderBonus = (data) => {
    if (data === 1) {
      return (
        <>
          <p className={s.bonusValue}>{t("winingSet.firstWin.value")}</p>
          <p className={s.bonusDescription}>{t("winingSet.firstWin.name")}</p>
        </>
      );
    }
    if (data === 2) {
      return (
        <>
          <p className={s.bonusValue}>{t("winingSet.secondWin.value")}</p>
          <p className={s.bonusDescription}>{t("winingSet.secondWin.name")}</p>
        </>
      );
    }
  };

  return (
    <>
      <div className={s.containerRight}>
        <img className={s.spinBg} src={firstSpinBg} alt="first win" />
        <div className={s.item}>
          {winingArr[0] ? (
            <div className={s.bonus}>{renderBonus(winingArr[0])}</div>
          ) : (
            <p className={s.default}>{t("firstSpin")}</p>
          )}
        </div>
      </div>
      <div className={s.containerLeft}>
        <img className={s.spinBg} src={secondSpinBg} alt="second win" />
        <div className={s.item}>
          {winingArr[1] ? (
            <div className={s.bonus}>{renderBonus(winingArr[1])}</div>
          ) : (
            <p className={s.default}>{t("secondtSpin")}</p>
          )}
        </div>
      </div>
    </>
  );
}
// const renderBonus = (data) => {
//   if (data === 1) {
//     return (
//       <>
//         <p className={s.bonusValue}>150</p>
//         <p className={s.bonusDescription}>фриспинов</p>
//       </>
//     );
//   }
//   if (data === 2) {
//     return (
//       <>
//         <p className={s.bonusValue}>375%</p>
//         <p className={s.bonusDescription}>бонуса на депозит</p>
//       </>
//     );
//   }
//   if (data === 3) {
//     return (
//       <>
//         <p className={s.bonusValue}>75</p>
//         <p className={s.bonusDescription}>фриспинов</p>
//       </>
//     );
//   }
//   if (data === 5 || data === 8) {
//     return (
//       <>
//         <p className={s.default}>попробуй</p>
//         <p className={s.default}>еще</p>
//       </>
//     );
//   }
// };
