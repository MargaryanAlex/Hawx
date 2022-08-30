import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/sportsbook.png";
import { useEffect } from "react";
import img1 from "src/assets/img/solutions/sportsbook/Group1.png";

// import { useState } from "react";
const Sportsbook = () => {
  // const [currentTab, setCurrentTab] = useState("Daily Operations");
  // const [0, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="G-solution P-sportsbook">
      <div className="G-solution-header P-sportsbook-header ">
        <div className="G-container">
          <div>
            <h3>{t("Be_always_on_top-text")}</h3>
            <p>{t("We_provide_Risk_Management-text")}</p>
            <p>{t("We_have_set-text")}</p>
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
            <img src={img1} alt="" />
          </div>
          <div className=" G-solution-body-text ">
            <ul style={{ marginLeft: "5px" }}>
              {Object.values(
                jsonFile.solutions.sportsbook[
                  `tab${0}` as keyof typeof jsonFile.solutions.sportsbook
                ].text
              ).map((item, index) => {
                return (
                  <li key={item.title + index}>
                    {item.content.length > 0 && (
                      <p>
                        {t(
                          `solutions.sportsbook.tab${0}.text.text${index}.content`
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
