import NewsCard from "../newsCard";
import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { RouteNames } from "src/router";
import MentionSection from "../mentionSection";

const NewsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="P-NewsSecition">
      <div className="G-container G-align-center G-flex-column P-lastNews">
        <h4>{t("LASTEST-text")}</h4>
        <div className=" G-flex G-justify-between">
          {Object.values(jsonFile.news).map((item, index) => {
            if (index < 4) {
              return (
                <div className="P-card" key={index}>
                  <NewsCard
                    img={item.img}
                    title={t(`news.news${index}.newsTitle`)}
                    content={t(`news.news${index}.newsContent`)}
                    link={item.link ? item.link : null}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <button>
          <NavLink to={RouteNames.NEWS}>{t("SEE_ALL-text")}</NavLink>
        </button>
      </div>
      <div className="P-slider-header">
        <h5>{t("Trusted-text")}</h5>
        <p>{t("We_work-text")}</p>
      </div>
      <div className="P-slider-section">
        <div className="G-container ">
          <MentionSection />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
