import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/website.png";
import { useEffect, useState } from "react";
import img1 from "src/assets/img/solutions/website/Group1.png";
import img2 from "src/assets/img/solutions/website/Group2.png";
import img3 from "src/assets/img/solutions/website/Group3.png";
import img4 from "src/assets/img/solutions/website/Group4.png";
import img5 from "src/assets/img/solutions/website/Group5.png";
import img6 from "src/assets/img/solutions/website/Group6.png";
import img7 from "src/assets/img/solutions/website/Group7.png";
const imgs = [img1, img2, img3, img4, img5, img6, img7];
const Website = () => {
  const [currentTab, setCurrentTab] = useState("Daily Operations");
  const [currentIndex, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="G-solution P-website">
      <div className="G-solution-header P-website-header ">
        <div className="G-container">
          <div>
            <h3>{t("Website_Manager-text")}</h3>
            <p>{t("All_websites-text")}</p>
            <p>{t("HawX_builds-text")}</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="G-solution-tabs">
          <h4>{t("WEBSITE-text")}:</h4>
          <div className="G-solution-tabs-container ">
            {Object.values(jsonFile.solutions.website).map((item, index) => {
              return (
                <div key={item.title + index}>
                  <div
                    className={`G-solution-tab P-website-border ${
                      item.title === currentTab ? "active" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab(item.title);
                      setCurrenntIndex(index);
                    }}
                  >
                    <p>{t(`solutions.website.tab${index}.title`)}</p>
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
            <h2>{t(`solutions.website.tab${currentIndex}.title`)}</h2>
            {Object.values(
              jsonFile.solutions.website[
                `tab${currentIndex}` as keyof typeof jsonFile.solutions.website
              ].text
            ).map((item, index) => {
              return (
                <div key={item.title + index}>
                  {item.title.length > 0 && (
                    <h3>
                      {t(
                        `solutions.website.tab${currentIndex}.text.text${index}.title`
                      )}
                    </h3>
                  )}
                  {item.content.length > 0 && (
                    <p>
                      {t(
                        `solutions.website.tab${currentIndex}.text.text${index}.content`
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

export default Website;
