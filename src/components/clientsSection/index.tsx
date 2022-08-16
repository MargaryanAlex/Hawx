import "./style.scss";
import { useTranslation } from "react-i18next";
import betconstruct from "src/assets/img/clientsLogo/betconstruct.svg";
import kings from "src/assets/img/clientsLogo/7kings.png";
import astra from "src/assets/img/clientsLogo/astra.png";
import bet90 from "src/assets/img/clientsLogo/bet90.png";
import betforward from "src/assets/img/clientsLogo/betforward.png";
import betnomi from "src/assets/img/clientsLogo/betnomi.png";
import ciwinz from "src/assets/img/clientsLogo/ciwinz.png";
import gg from "src/assets/img/clientsLogo/gg.png";
import jack998 from "src/assets/img/clientsLogo/jack998.png";
import medina from "src/assets/img/clientsLogo/medina.png";
import pnxbet from "src/assets/img/clientsLogo/pnxbet.png";
import spinbooke from "src/assets/img/clientsLogo/spinbooke.png";
import { NavLink } from "react-router-dom";
import { RouteNames } from "src/router";

const ClintsSection = () => {
  const { t } = useTranslation();
  const logos = [
    betconstruct,
    pnxbet,
    betforward,
    ciwinz,
    jack998,
    gg,
    bet90,
    spinbooke,
    medina,
    astra,
    kings,
    betnomi,
  ];
  return (
    <div className="P-clientsSection">
      <p>{t("Clients-text")}</p>
      <div className="P-logos G-container">
        {logos.map((item, index) => {
          return <img src={item} alt="Logo" key={item + index} />;
        })}
      </div>
      <button>
        <NavLink to={RouteNames.CLIENTS}>{t("VIEW_MORE-text")}</NavLink>
      </button>
    </div>
  );
};

export default ClintsSection;
