import { useTranslation } from "react-i18next";
import NewsCard from "src/components/newsCard";
import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";

const News = () => {
  const { t } = useTranslation();
  return (
    <div className="P-news">
      <div className="G-container">
        <h2>{t("Explore_Blogs-text")}</h2>
        <p>{t("Find_out-text")}</p>
        <p>{t("Keep_updated-text")}</p>
        <h3>{t("LASTEST-text")}</h3>
        <div className="P-news-container">
          {Object.values(jsonFile.news).map((item, index) => {
            return (
              <div className="P-card" key={index}>
                <NewsCard
                  img={item.img}
                  title={t(`news.news${index}.newsTitle`)}
                  content={t(`news.news${index}.newsContent`)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
