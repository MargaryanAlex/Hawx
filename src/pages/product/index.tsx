import "./style.scss";
<<<<<<< HEAD
import jsonFile from "src/i18n/locales/eng/translations.json";
import {useTranslation} from "react-i18next";
import logo from "src/assets/img/solutions/product.png";
import {useEffect, useRef, useState} from "react";
=======
import jsonFile from "src/i18n/locales/en/translations.json";
import { useTranslation } from "react-i18next";
import logo from "src/assets/img/solutions/product.png";
import { useEffect, useState } from "react";
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
import img1 from "src/assets/img/solutions/product/Group1.png";
import img2 from "src/assets/img/solutions/product/Group2.png";
import img3 from "src/assets/img/solutions/product/Group3.png";
import img4 from "src/assets/img/solutions/product/Group4.png";
import img5 from "src/assets/img/solutions/product/Group5.png";
<<<<<<< HEAD
import Animation from "../../components/animation";
import Slider from "react-slick";
import SolutionsLayout from "src/layout/solutionsLayout";

const imgs = [img1, img2, img3, img4, img5];
const Product = () => {
    const [loader,setLoader]=useState<boolean>(true)

    const settings = {
        customPaging: function (i: number) {
            return (
                <div
                    className={`G-solution-tab P-product-border `}
                >
                    <p>{t(`solutions.product.tab${i}.title`)}</p>
                </div>
            );
        },
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,

        slidesToScroll: 1
    };
    let title = useRef<HTMLDivElement | null>(null)
    let content = useRef<HTMLDivElement | null>(null)


    const {t} = useTranslation();
    useEffect(() => {
        setLoader(false)
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, []);
    return (
        <SolutionsLayout >

            <div className="G-solution P-product">
                <div className="G-solution-header P-product-header " ref={title}>
                    <Animation element={title}>
                        <div className="G-container">
                            <div>
                                <h3>{t("Proven_Product-text")}</h3>
                                <p>{t("You_can-text")}</p>
                                <p>{t("To_put_it_simply-text")}</p>
                            </div>
                            <img src={logo} alt="logo"/>
                        </div>
                    </Animation>


                </div>
                <div ref={content}/>
                <Slider {...settings} >
                    {Object.values(
                        jsonFile.solutions.product
                    ).map((element, elementIndex) => {
                        return (
                            <div className="G-container"
                                 key={`${jsonFile.solutions.product[`tab${elementIndex}` as keyof typeof jsonFile.solutions.product
                                     ].title}`}>
                                <div className="G-solution-body">
                                    <div className="G-img-container">
                                        <Animation element={content}>
                                            <img src={imgs[elementIndex]} alt=""/>
                                        </Animation>
                                    </div>
                                    <div className=" G-solution-body-text">
                                        <Animation element={content}>

                                            <h2>{t(`solutions.product.tab${elementIndex}.title`)}</h2>
                                            {Object.values(
                                                jsonFile.solutions.product[
                                                    `tab${elementIndex}` as keyof typeof jsonFile.solutions.product
                                                    ].text
                                            ).map((item, index) => {
                                                return (
                                                    <div key={item.title + index}>
                                                        {item.title.length > 0 && (
                                                            <h3>
                                                                {t(
                                                                    `solutions.product.tab${elementIndex}.text.text${index}.title`
                                                                )}
                                                            </h3>
                                                        )}
                                                        {item.content.length > 0 && (
                                                            <p>
                                                                {t(
                                                                    `solutions.product.tab${elementIndex}.text.text${index}.content`
                                                                )}
                                                            </p>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </Animation>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </SolutionsLayout>
    )
        ;
=======
const imgs = [img1, img2, img3, img4, img5];
const Product = () => {
  const [currentTab, setCurrentTab] = useState("Product Planning & Roadmap");
  const [currentIndex, setCurrenntIndex] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
            <img src={imgs[currentIndex]} alt="" />
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
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
};

export default Product;
