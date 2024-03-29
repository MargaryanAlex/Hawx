import NewsCard from "../newsCard";
import "./style.scss";
<<<<<<< HEAD
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {RouteNames} from "src/router";
import Slider from "react-slick";
import next from "../../assets/img/mentions/next.png";
import prev from "../../assets/img/mentions/prev.png";
import {useContext, useRef} from "react";
import Animation from "../animation";
import {LanguageContext} from "../../context/language-context";
import {NewsContext} from "../../context/news-context";


function SampleNextArrow(props: any) {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={next} alt="next"/>
        </div>
    );
}

function SamplePrevArrow({...props}: any) {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <img src={prev} alt="previous"/>
        </div>
    );
}

const NewsSection = () => {
    const {t} = useTranslation();
    const news = useRef<HTMLDivElement | null>(null)
    const {data, setData} = useContext(NewsContext)
    const language = useContext(LanguageContext)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        swipeToSlide: true,
        swipe: true,
        scroll: true,
        responsive: [
            {
                breakpoint: 1208,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 671,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1.05,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,

                },
            },
        ],
    };


    return (
        <div className="P-NewsSection" ref={news}>
            <Animation element={news}>

                <div className="G-container G-align-center G-flex-column P-lastNews">
                    <h4>{t("LASTEST-text")}</h4>
                    <div className="G-container ">

                        <Slider {...settings}>

                            {data.map((item, index) => {
                                if (index < 10) {
                                    return (
                                        <div className="P-card" key={index}>
                                            <NewsCard
                                                img={item.smallThumbnail}
                                                title={item.newsTitle[language.language]}
                                                content={item.newsContent[language.language]}
                                                link={item.link ? item.link : null}
                                            />
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </Slider>
                    </div>
                    <button>
                        <NavLink to={RouteNames.NEWS}>{t("SEE_ALL-text")}</NavLink>
                    </button>
                </div>
            </Animation>
            {/* <div className="P-slider-header">
=======
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
     {/* <div className="P-slider-header">
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
        <h5>{t("Trusted-text")}</h5>
        <p>{t("We_work-text")}</p>
      </div>
      <div className="P-slider-section">
        <div className="G-container ">
          <MentionSection />
        </div>
      </div>*/}
<<<<<<< HEAD
        </div>
    );
=======
    </div>
  );
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
};

export default NewsSection;
