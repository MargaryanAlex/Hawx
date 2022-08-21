import "./style.scss";
import { useTranslation } from "react-i18next";
import fb from "src/assets/img/aboutUs/Facebook.svg";
import inst from "src/assets/img/aboutUs/Instagram.svg";
import linkedin from "src/assets/img/aboutUs/Linkedin.svg";
const leadership = [
  {
    img: "",
    name: "Giorgi_Tsutskiridze-text",
    role: "Co-Founder_&_Chief_Executive_Officer-text",
  },
  {
    img: "",
    name: "Giorgi_Tsutskiridze-text",
    role: "Co-Founder_&_Chief_Executive_Officer-text",
  },
  {
    img: "",
    name: "Giorgi_Tsutskiridze-text",
    role: "Co-Founder_&_Chief_Executive_Officer-text",
  },
  {
    img: "",
    name: "Giorgi_Tsutskiridze-text",
    role: "Co-Founder_&_Chief_Executive_Officer-text",
  },
  {
    img: "",
    name: "Giorgi_Tsutskiridze-text",
    role: "Co-Founder_&_Chief_Executive_Officer-text",
  },
  {
    img: "",
    name: "Giorgi_Samkharadze-text",
    role: "Co-Founder_&_Chief_Operating_Officer-text",
  },

  {
    img: "",
    name: "Rafael_Gyulnazaryan-text",
    role: "Co-Founder_&_Chief_Technology_Officer-text",
  },
  {
    img: "",
    name: "Gela_Makharadze-text",
    role: "Chief_Financial_Officer-text",
  },
  {
    img: "",
    name: "Beka_Chikobava-text",
    role: "Head_of_CRM-text",
  },
  {
    img: "",
    name: "Natia_Zedelashvili-text",
    role: "Head_of_Design-text",
  },
  {
    img: "",
    name: "Giorgi_Nadaraia-text",
    role: "Head_of_Marketing-text",
  },
  {
    img: "",
    name: "Mikheil_Gogitashvili-text",
    role: "Head_of_Products-text",
  },
  {
    img: "",
    name: "Vova_Sardanyan-text",
    role: "Head_of_Project_Management-text",
  },
  {
    img: "",
    name: "Avetik_Hasasyan-text",
    role: "Tech_Guru-text",
  },
];
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="P-about-us">
      <div className="P-about-us-text G-flex-wrap G-container">
        <div className="P-about-card">
          <h3>{t("Company-text")}</h3>
          <p>{t("While_being-text")}</p>
          <span>{t("FOLLOW-text")}</span>
          <div className="G-flex P-icons">
            <img src={fb} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={inst} alt="instagram" />
          </div>
        </div>
        <div className="P-about-card">
          <h3>{t("Who_We_Are-text")}</h3>
          <p>{t("Our_vision-text")}</p>
          <p>{t("Our_mission-text")}</p>
        </div>
        <div className="P-about-card">
          <h3>{t("HawX_Standout-text")}</h3>
          <p>{t("Managing_an_online-text")}</p>
          <div className="P-numbers G-flex">
            <div>
              <p>25+</p>
              <span>{t("Markets-text")}</span>
            </div>
            <div>
              <p>75+</p>
              <span>{t("Employees-text")}</span>
            </div>
            <div>
              <p>3</p>
              <span>{t("Offices-text")}</span>
            </div>
            <div>
              <p>30+</p>
              <span>{t("Clients-text")}</span>
            </div>
          </div>
        </div>
        <div className="P-about-card">
          <h3>{t("The_Team-text")}</h3>
          <p>{t("HawX_i_a_team-text")}</p>
          <p>{t("Delivering_a_personal-text")}</p>
        </div>
      </div>
      <div className="P-photos G-container">
        <h2>{t("Leadership_&_Management-text")}</h2>
        <div className="P-container">
          {leadership.map((item, index) => {
            return (
              <div className="P-photo-card" key={item.name + index}>
                <div className="P-photo">
                  <img src={item.img} alt="pic" />
                </div>
                <h4>{t(item.name)}</h4>
                <p>{t(item.role)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
