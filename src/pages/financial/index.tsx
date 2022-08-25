import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/financial.png";
import { useEffect, useState } from "react";
const Financial = () => {
  const [currentTab, setCurrentTab] = useState("Financial Reporting");
  const [currentIndex, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  useEffect (() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <div className="G-solution P-financial">
      <div className="G-solution-header P-financial-header ">
        <div className="G-container">
          <div>
            <h3>{t("Control_Financials-text")}</h3>
            <p>{t("HawX_is_ready-text")}</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="G-solution-tabs">
          <h4>{t("FINANCIAL-text")}:</h4>
          <div className="G-solution-tabs-container ">
            {Object.values(jsonFile.solutions.financial).map((item, index) => {
              return (
                <div key={item.title + index}>
                  <div
                    className={`G-solution-tab P-financial-border ${
                      item.title === currentTab ? "active" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab(item.title);
                      setCurrenntIndex(index);
                    }}
                  >
                    <p>{t(`solutions.financial.tab${index}.title`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="G-container">
        <div className="G-solution-body">
          <div className="G-img-container">
            <img
              src={
                jsonFile.solutions.financial[
                  `tab${currentIndex}` as keyof typeof jsonFile.solutions.financial
                ].icon
              }
              alt=""
            />
          </div>
          <div className=" G-solution-body-text">
            <h2>{t(`solutions.financial.tab${currentIndex}.title`)}</h2>
            {Object.values(
              jsonFile.solutions.financial[
                `tab${currentIndex}` as keyof typeof jsonFile.solutions.financial
              ].text
            ).map((item, index) => {
              return (
                <div key={item.title + index}>
                  {item.title.length > 0 && (
                    <h3>
                      {t(
                        `solutions.financial.tab${currentIndex}.text.text${index}.title`
                      )}
                    </h3>
                  )}
                  {item.content.length > 0 && (
                    <p>
                      {t(
                        `solutions.financial.tab${currentIndex}.text.text${index}.content`
                      )}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
