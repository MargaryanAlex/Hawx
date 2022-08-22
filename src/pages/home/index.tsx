import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ClintsSection from "src/components/clientsSection";
import NewsSection from "src/components/newsSection";
import { solutionsList } from "src/router";
import "./style.scss";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="P-homepage">
      <div className="G-container">
        <div className="P-container">
          <h2>{t("Ultimate-text")}</h2>
          <div className="P-container">
            <span>{t("Delivering-text")}</span>
          </div>
        </div>
      </div>
      <div className="P-solutions">
        <div className="G-container">
          {" "}
          <h5>{t("Our_Solutions-text")}</h5>
        </div>
        <div className="P-solutions-list">
          <div className="G-container">
            {solutionsList.map((item) => {
              return (
                <NavLink
                  to={item.path as string}
                  key={item.path}
                  className="P-solution"
                >
                  <div
                    className="P-solution-logo"
                    style={{
                      background: item.color,
                    }}
                  >
                    <img src={item.icon} alt="logo" />
                  </div>
                  <p>{t(item.title)}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <ClintsSection />
      <div className="P-section G-align-center G-flex-column">
        <h4>{t("HawX_Standout-text")}</h4>
        <div className="P-blue-area">
          <div className="G-container">
            <div className="P-container">
              <p>{t("MANAGING-text")}</p>
              <div className="P-counts G-justify-between">
                <div>
                  <h5>25+</h5>
                  <p>{t("Markets-text")}</p>
                </div>
                <div>
                  <h5>75+</h5>
                  <p>{t("Employees-text")}</p>
                </div>
                <div>
                  <h5>3</h5>
                  <p>{t("Offices-text")}</p>
                </div>
                <div>
                  <h5>30+</h5>
                  <p>{t("Clients-text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="P-section G-align-center G-flex-column">
        <h4 className="G-container">{t("Brand_Way-text")}</h4>
        <div className="P-gray-area">
          <div className="G-container">
            <div className=" G-flex-wrap  G-justify-center P-flex-area">
              <div className="P-card">
                <h5>{t("Perfect_Strategy-text")}</h5>
                <p>{t("Based_on_research-text")}</p>
              </div>
              <div className="P-card">
                <h5>{t("Innovative_Ideas-text")}</h5>
                <p>{t("The_digital_world-text")}</p>
              </div>
              <div className="P-card">
                <h5>{t("Targeted_Results-text")}</h5>
                <p>{t("We_make_your_success-text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsSection />
    </div>
  );
};

export default Home;
