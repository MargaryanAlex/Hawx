import "./style.scss";
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/product.png";
import { useEffect, useState } from "react";
const Product = () => {
  const [currentTab, setCurrentTab] = useState("Product Planning & Roadmap");
  const [currentIndex, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <div className="G-solution P-product">
      <div className="G-solution-header P-product-header ">
        <div className="G-container">
          <div>
            <h3>{t("Proven_Product-text")}</h3>
            <p>{t("You_can-text")}</p>
            <p>{t("To_put_it_simply-text")}</p>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="G-solution-tabs">
          <h4>{t("PRODUCT-text")}:</h4>
          <div className="G-solution-tabs-container ">
            {Object.values(jsonFile.solutions.product).map((item, index) => {
              return (
                <div key={item.title + index}>
                  <div
                    className={`G-solution-tab P-product-border ${
                      item.title === currentTab ? "active" : ""
                    }`}
                    onClick={() => {
                      setCurrentTab(item.title);
                      setCurrenntIndex(index);
                    }}
                  >
                    <p>{t(`solutions.product.tab${index}.title`)}</p>
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
                jsonFile.solutions.product[
                  `tab${currentIndex}` as keyof typeof jsonFile.solutions.product
                ].icon
              }
              alt=""
            />
          </div>
          <div className=" G-solution-body-text">
            <h2>{t(`solutions.product.tab${currentIndex}.title`)}</h2>
            {Object.values(
              jsonFile.solutions.product[
                `tab${currentIndex}` as keyof typeof jsonFile.solutions.product
              ].text
            ).map((item, index) => {
              return (
                <div key={item.title + index}>
                  {item.title.length > 0 && (
                    <h3>
                      {t(
                        `solutions.product.tab${currentIndex}.text.text${index}.title`
                      )}
                    </h3>
                  )}
                  {item.content.length > 0 && (
                    <p>
                      {t(
                        `solutions.product.tab${currentIndex}.text.text${index}.content`
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

export default Product;
