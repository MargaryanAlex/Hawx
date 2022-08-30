import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/crm.png";
import { useEffect, useState } from "react";
import img1 from "src/assets/img/solutions/crm/Group1.png";
import img2 from "src/assets/img/solutions/crm/img2.png";
import img3 from "src/assets/img/solutions/crm/Group3.png";
import img4 from "src/assets/img/solutions/crm/Group4.png";
import img5 from "src/assets/img/solutions/crm/Group5.png";
const imgs = [img1, img2, img3, img4, img5];
const Crm = () => {
  const [currentTab, setCurrentTab] = useState(
    "Segmentation & Onboarding Optimization"
  );
  const [currentIndex, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="G-solution P-crm">
      <div className="G-solution-header P-crm-header ">
        <div className="G-container">
          <div>
            <h3>{t("Get_Supreme_CRM-text")}</h3>
            <p>{t("We_provide-text")}</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="G-solution-tabs">
          <h4>{t("CRM-text")}:</h4>
          <div className="G-solution-tabs-container ">
            {Object.values(jsonFile.solutions.crm).map((item, index) => {
              return (
                <div key={item.title + index}>
                  <div
                    className={`G-solution-tab P-crm-border ${
                      item.title === currentTab ? "active" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab(item.title);
                      setCurrenntIndex(index);
                    }}
                  >
                    <p>{t(`solutions.crm.tab${index}.title`)}</p>
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
            <img src={imgs[currentIndex]} alt="" />
          </div>
          <div className=" G-solution-body-text">
            <h2>{t(`solutions.crm.tab${currentIndex}.title`)}</h2>
            {Object.values(
              jsonFile.solutions.crm[
                `tab${currentIndex}` as keyof typeof jsonFile.solutions.crm
              ].text
            ).map((item, index) => {
              return (
                <div key={item.title + index}>
                  {item.title.length > 0 && (
                    <h3>
                      {t(
                        `solutions.crm.tab${currentIndex}.text.text${index}.title`
                      )}
                    </h3>
                  )}
                  {item.content.length > 0 && (
                    <p>
                      {t(
                        `solutions.crm.tab${currentIndex}.text.text${index}.content`
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

export default Crm;
