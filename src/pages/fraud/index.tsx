import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/fraud.png";
import { useState } from "react";
const Fraud = () => {
  const [currentTab, setCurrentTab] = useState("Daily Operations");
  const [currentIndex, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <div className="G-solution P-fraud">
      <div className="G-solution-header P-fraud-header ">
        <div className="G-container">
          <div>
            <h3>{t("fraud_Manager-text")}</h3>
            <p>{t("All_frauds-text")}</p>
            <p>{t("HawX_builds-text")}</p>
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
                  `tab${currentIndex}` as keyof typeof jsonFile.solutions.fraud
                ].icon
              }
              alt=""
            />
          </div>
          <div className=" G-solution-body-text">
            <ul>
              {Object.values(
                jsonFile.solutions.fraud[
                  `tab${currentIndex}` as keyof typeof jsonFile.solutions.fraud
                ].text
              ).map((item, index) => {
                return (
                  <li key={item.title + index}>
                    {item.content.length > 0 && (
                      <p>
                        {t(
                          `solutions.fraud.tab${currentIndex}.text.text${index}.content`
                        )}
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
