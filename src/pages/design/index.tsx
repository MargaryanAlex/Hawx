import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/design.png";
import { useState } from "react";
const Design = () => {
  const [currentTab, setCurrentTab] = useState("Website Design");
  const [currentIndex, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  return (
    <div className="G-solution P-design">
      <div className="G-solution-header P-design-header ">
        <div className="G-container">
          <div>
            <h3>{t("We_Create_Great-text")}</h3>
            <p>{t("We_offer-text")}</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="G-solution-tabs">
          <h4>{t("DESIGN-text")}:</h4>
          <div className="G-solution-tabs-container ">
            {Object.values(jsonFile.solutions.design).map((item, index) => {
              return (
                <div key={item.title + index}>
                  <div
                    className={`G-solution-tab P-design-border ${
                      item.title === currentTab ? "active" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab(item.title);
                      setCurrenntIndex(index);
                    }}
                  >
                    <p>{t(`solutions.design.tab${index}.title`)}</p>
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
                jsonFile.solutions.design[
                  `tab${currentIndex}` as keyof typeof jsonFile.solutions.design
                ].icon
              }
              alt=""
            />
          </div>
          <div className=" G-solution-body-text">
            <h2>{t(`solutions.design.tab${currentIndex}.title`)}</h2>
            {Object.values(
              jsonFile.solutions.design[
                `tab${currentIndex}` as keyof typeof jsonFile.solutions.design
              ].text
            ).map((item, index) => {
              return (
                <div key={item.title + index}>
                  {item.title.length > 0 && (
                    <h3>
                      {t(
                        `solutions.design.tab${currentIndex}.text.text${index}.title`
                      )}
                    </h3>
                  )}
                  {item.content.length > 0 && (
                    <p>
                      {t(
                        `solutions.design.tab${currentIndex}.text.text${index}.content`
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

export default Design;
