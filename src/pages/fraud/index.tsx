import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/fraud.png";
import { useEffect } from "react";
// import { useState } from "react";
const Fraud = () => {
  // const [currentTab, setCurrentTab] = useState("Daily Operations");
  // const [0, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="G-solution P-fraud">
      <div className="G-solution-header P-fraud-header ">
        <div className="G-container">
          <div>
            <h3>{t("Helping_You-text")}</h3>
            <p>{t("Casinos_offer-text")}</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="G-solution-tabs">
          <h4>{t("FRAUD-text")}:</h4>
          {/* <div className="G-solution-tabs-container ">
            {Object.values(jsonFile.solutions.fraud).map((item, index) => {
              return (
                <div key={item.title + index}>
                  <div
                    className={`G-solution-tab P-fraud-border ${
                      item.title === currentTab ? "active" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab(item.title);
                      setCurrenntIndex(index);
                    }}
                  >
                    <p>{t(`solutions.fraud.tab${index}.title`)}</p>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
      <div className="G-container">
        <div className="G-solution-body">
          <div className="G-img-container">
            <img
              src={
                jsonFile.solutions.fraud[
                  `tab${0}` as keyof typeof jsonFile.solutions.fraud
                ].icon
              }
              alt=""
            />
          </div>
          <div className=" G-solution-body-text">
            <ul>
              {Object.values(
                jsonFile.solutions.fraud[
                  `tab${0}` as keyof typeof jsonFile.solutions.fraud
                ].text
              ).map((item, index) => {
                return (
                  <li key={item.title + index}>
                    {item.content.length > 0 && (
                      <p>
                        {t(`solutions.fraud.tab${0}.text.text${index}.content`)}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fraud;
