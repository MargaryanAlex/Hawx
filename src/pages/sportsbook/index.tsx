import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/sportsbook.png";
import { useState } from "react";
const Sportsbook = () => {
  const [currentTab, setCurrentTab] = useState("Daily Operations");
  const [currentIndex, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <div className="G-solution P-sportsbook">
      <div className="G-solution-header P-sportsbook-header ">
        <div className="G-container">
          <div>
            <h3>{t("sportsbook_Manager-text")}</h3>
            <p>{t("All_sportsbooks-text")}</p>
            <p>{t("HawX_builds-text")}</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="G-solution-tabs">
          <h4>{t("SPORTSBOOK-text")}:</h4>
          {/* <div className="G-solution-tabs-container ">
            {Object.values(jsonFile.solutions.sportsbook).map((item, index) => {
              return (
                <div key={item.title + index}>
                  <div
                    className={`G-solution-tab P-sportsbook-border ${
                      item.title === currentTab ? "active" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab(item.title);
                      setCurrenntIndex(index);
                    }}
                  >
                    <p>{t(`solutions.sportsbook.tab${index}.title`)}</p>
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
                jsonFile.solutions.sportsbook[
                  `tab${currentIndex}` as keyof typeof jsonFile.solutions.sportsbook
                ].icon
              }
              alt=""
            />
          </div>
          <div className=" G-solution-body-text">
            <ul>
              {Object.values(
                jsonFile.solutions.sportsbook[
                  `tab${currentIndex}` as keyof typeof jsonFile.solutions.sportsbook
                ].text
              ).map((item, index) => {
                return (
                  <li key={item.title + index}>
                    {item.content.length > 0 && (
                      <p>
                        {t(
                          `solutions.sportsbook.tab${currentIndex}.text.text${index}.content`
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

export default Sportsbook;
