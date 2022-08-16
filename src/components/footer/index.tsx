import { useTranslation } from "react-i18next";
import phone from "src/assets/img/footer/Phone.png";
import envelope from "src/assets/img/footer/Envelope.png";
import fb from "src/assets/img/footer/fb.svg";
import insta from "src/assets/img/footer/instagram.svg";
import linkdin from "src/assets/img/footer/linkedin.svg";
import logo from "src/assets/img/footer/logo.svg";
import "./style.scss";
import { companyList, legalList, solutionsList } from "src/router";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="P-footer">
      <div className="P-contacts">
        <h3>{t("GET_START-text")}</h3>
        <p>{t("DONT_HESITATE-text")}</p>
        <div className="P-btns">
          <button>
            <img src={phone} alt="phone" />
            {t("PHONE-text")}
          </button>
          <button>
            <img src={envelope} alt="Envelope" />
            {t("EMAIL-text")}
          </button>
        </div>
      </div>
      <div className="P-footer-nav G-web">
        <div className="G-container">
          <div className="P-footer-logo">
            <img src={logo} alt="logo" className="logo" />
            <div className="P-social-icons">
              <p>{t("FOLLOW-text")}</p>
              <div className="P-icons">
                <img src={fb} alt="Facebook" />
                <img src={linkdin} alt="Linkdin" />
                <img src={insta} alt="Instagram" />
              </div>
            </div>
            <span>© 2022 Turn Up. All Rights Reserved</span>
          </div>
          <div className="P-footer-navigation">
            <div className="P-sections">
              <h4>{t("Company-text")}</h4>
              {companyList.map((item, index) => {
                return (
                  <NavLink to={item.path as string} key={item.title + index}>
                    {t(item.title)}
                  </NavLink>
                );
              })}
            </div>
            <div className="P-sections">
              <h4>{t("Solutions-text")}</h4>
              {solutionsList.map((item, index) => {
                return (
                  <NavLink to={item.path as string} key={item.title + index}>
                    {t(item.title)}
                  </NavLink>
                );
              })}
            </div>
            <div className="P-sections">
              <h4>{t("LEGAL-text")}</h4>
              {legalList.map((item, index) => {
                return (
                  <NavLink to={item.path as string} key={item.title + index}>
                    {t(item.title)}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="P-footer-nav G-mobile">
        <div className="G-container">
          <img src={logo} alt="logo" className="logo" />

          <div className="P-footer-navigation">
            <div className="P-side">
              <div className="P-sections">
                <h4>{t("Solutions-text")}</h4>
                {solutionsList.map((item, index) => {
                  return (
                    <NavLink to={item.path as string} key={item.title + index}>
                      {t(item.title)}
                    </NavLink>
                  );
                })}
              </div>
              <div className="P-social-icons">
                <p>{t("FOLLOW-text")}</p>
                <div className="P-icons">
                  <img src={fb} alt="Facebook" />
                  <img src={linkdin} alt="Linkdin" />
                  <img src={insta} alt="Instagram" />
                </div>
              </div>
            </div>
            <div className="P-side">
              <div className="P-sections">
                <h4>{t("Company-text")}</h4>
                {companyList.map((item, index) => {
                  return (
                    <NavLink to={item.path as string} key={item.title + index}>
                      {t(item.title)}
                    </NavLink>
                  );
                })}
              </div>

              <div className="P-sections">
                <h4>{t("LEGAL-text")}</h4>
                {legalList.map((item, index) => {
                  return (
                    <NavLink to={item.path as string} key={item.title + index}>
                      {t(item.title)}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>

          <span>© 2022 Turn Up. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
