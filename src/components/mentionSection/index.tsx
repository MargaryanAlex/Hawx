import Slider from "react-slick";
import prev from "src/assets/img/mentions/prev.png";
import next from "src/assets/img/mentions/next.png";
<<<<<<< HEAD
import jsonFile from "src/i18n/locales/eng/translations.json";
=======
import jsonFile from "src/i18n/locales/en/translations.json";
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac

import "./style.scss";
import { useTranslation } from "react-i18next";
function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={next} alt="next" />
    </div>
  );
}

function SamplePrevArrow({ ...props }: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={prev} alt="previus" />
    </div>
  );
}
const MentionSection = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 608,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="P-mentions-section">
<<<<<<< HEAD
      {/*<div className="G-web">
=======
      <div className="G-web">
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
        <Slider {...settings}>
          {Object.values(jsonFile.mentions).map((item, index) => {
            return (
              <div className="P-slide" key={item.name + index}>
                <div className="P-card">
                  <img src={item.img} alt="pic" />
                  <div className="P-content">
                    {Object.values(item.content).map((elem, ind) => (
                      <p key={elem + ind}>
                        {t(`mentions.mention${index}.content.text${ind}`)}
                      </p>
                    ))}
                  </div>
                  <div>
                    <div className="P-name">
                      {t(`mentions.mention${index}.name`)}
                    </div>
                    <div className="P-role">
                      {t(`mentions.mention${index}.role`)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="G-mobile">
        <div className="P-container ">
          {Object.values(jsonFile.mentions).map((item, index) => {
            return (
              <div className="P-slide" key={item.name + index}>
                <div className="P-card">
                  <img src={item.img} alt="pic" />
                  <div className="P-content">
                    {Object.values(item.content).map((elem, ind) => (
                      <p key={elem + ind}>
                        {t(`mentions.mention${index}.content.text${ind}`)}
                      </p>
                    ))}
                  </div>
                  <div>
                    <div className="P-name">
                      {t(`mentions.mention${index}.name`)}
                    </div>
                    <div className="P-role">
                      {t(`mentions.mention${index}.role`)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
<<<<<<< HEAD
      </div>*/}
=======
      </div>
>>>>>>> 9444585a40ebb3f1dceede8d9029cf775b02c5ac
    </div>
  );
};

export default MentionSection;
