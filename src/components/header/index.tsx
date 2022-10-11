import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "src/assets/img/logo.svg";
import logo_white from "src/assets/img/header/logo_white.png";
import menu from "src/assets/img/header/menu.svg";
import close from "src/assets/img/header/close.svg";
import flagUK from "src/assets/img/header/Flag_UK.svg";
import flagRu from "src/assets/img/header/Flag_Ru.svg";
import { navList } from "src/router";
import { useEffect, useState } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

interface IOnHover {
  Solutions: boolean;
  selector: boolean;
  burgerMenu: boolean;
}
interface ISelected {
  title: string;
  icon: string;
  id: string;
}

const Header = () => {
  const { t, i18n } = useTranslation();
  const [onHover, setOnHover] = useState<IOnHover>({
    Solutions: false,
    selector: false,
    burgerMenu: false,
  });
  const options: ISelected[] = [
    { title: "EN", icon: flagUK, id: "en" },
    { title: "RU", icon: flagRu, id: "ru" },
  ];
  const [selected, setSelected] = useState<ISelected>(
    localStorage.getItem("language")
      ? options.filter(
          (item) => item.id === localStorage.getItem("language")
        )[0]
      : {
          title: "EN",
          icon: flagUK,
          id: "en",
        }
  );

  type ObjectKey = keyof typeof onHover;
  const languageChanger = (item: ISelected) => {
    setSelected(item);
    localStorage.setItem("language", item.id);
  };

  useEffect(() => {
    i18n.changeLanguage(selected.id);
     // eslint-disable-next-line
  }, [selected]);
  return (
    <header className="P-header">
      <div className="G-container G-justify-between G-align-center">
        <div className="P-logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        {/*Header for web ____________________________________________________________________________________________________________________*/}

        <div className="P-menu G-web G-justify-between G-align-center">
          <div className="P-navigation G-justify-between G-align-center">
            {navList.map((item, index) => {
              return (
                <div key={item.title + index}>
                  {item.path && (
                    <NavLink to={item.path}>{t(item.title)}</NavLink>
                  )}
                  {item.subList && (
                    <div
                      className="P-dropdown"
                      onMouseOver={() => {
                        setOnHover({
                          ...onHover,
                          [item.title as ObjectKey]: true,
                        });
                      }}
                      onMouseLeave={() => {
                        setOnHover({
                          ...onHover,
                          [item.title as ObjectKey]: false,
                        });
                      }}
                    >
                      <p>{t(item.title)}</p>
                      <div
                        className={
                          onHover[item.title as ObjectKey]
                            ? "active P-options"
                            : "P-options"
                        }
                      >
                        <ul>
                          {item.subList.map((subItem, subIndex) => {
                            return (
                              <li key={subItem.title + subIndex}>
                                <NavLink to={subItem.path as string}>
                                  {t(subItem.title)}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="P-language-bar">
            <div
              className="P-selector"
              onMouseOver={() => {
                setOnHover({ ...onHover, selector: true });
              }}
              onMouseLeave={() => {
                setOnHover({ ...onHover, selector: false });
              }}
            >
              <p className="G-justify-between G-align-center">
                {t(selected.title)} <img src={selected.icon} alt="flag" />{" "}
                {onHover.selector ? <ArrowDropUp /> : <ArrowDropDown />}
              </p>
              <ul className={onHover.selector ? "active" : ""}>
                {options.map((item, index) => {
                  if (item.title !== selected.title) {
                    return (
                      <li
                        key={item.title + index}
                        onClick={() => languageChanger(item)}
                      >
                        {" "}
                        {t(item.title)} <img src={item.icon} alt="flag" />
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          </div>
        </div>

        {/*___________________________________________________________________________________________________________________________________ */}

        {/*Header for mobile __________________________________________________________________________________________________________________*/}

        <div className="G-mobile">
          <img
            src={menu}
            alt="menu"
            onClick={() => {
              setOnHover({ ...onHover, burgerMenu: true });
            }}
          />
          <div
            className={
              onHover.burgerMenu ? "active P-mobile-menu" : "P-mobile-menu"
            }
          >
            <div className="P-top G-justify-between">
              <NavLink
                to="/"
                onClick={() => {
                  setOnHover({ ...onHover, burgerMenu: false });
                }}
              >
                <img src={logo_white} alt="logo_white" />
              </NavLink>
              <img
                src={close}
                alt="close"
                onClick={() => {
                  setOnHover({ ...onHover, burgerMenu: false });
                }}
              />
            </div>
            <div className="P-nav">
              <div className="P-navigation ">
                {navList.map((item, index) => {
                  return (
                    <div key={item.title + index}>
                      {item.path && (
                        <NavLink
                          to={item.path}
                          onClick={() => {
                            setOnHover({ ...onHover, burgerMenu: false });
                          }}
                        >
                          {t(item.title)}
                        </NavLink>
                      )}
                      {item.subList && (
                        <div
                          className="P-dropdown"
                          onMouseOver={() => {
                            setOnHover({
                              ...onHover,
                              [item.title as ObjectKey]: true,
                            });
                          }}
                          onMouseLeave={() => {
                            setOnHover({
                              ...onHover,
                              [item.title as ObjectKey]: false,
                            });
                          }}
                        >
                          <p>
                            {t(item.title)} {}
                          </p>
                          <div
                            className={
                              onHover[item.title as ObjectKey]
                                ? "active P-options"
                                : "P-options"
                            }
                          >
                            <ul>
                              {item.subList.map((subItem, subIndex) => {
                                return (
                                  <li key={subItem.title + subIndex}>
                                    <NavLink
                                      to={subItem.path as string}
                                      onClick={() => {
                                        setOnHover({
                                          ...onHover,
                                          burgerMenu: false,
                                        });
                                      }}
                                    >
                                      {t(subItem.title)}
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="P-language-bar">
                <div
                  className="P-selector"
                  onMouseOver={() => {
                    setOnHover({ ...onHover, selector: true });
                  }}
                  onMouseLeave={() => {
                    setOnHover({ ...onHover, selector: false });
                  }}
                >
                  <p className="G-justify-between G-align-center">
                    {t(selected.title)} <img src={selected.icon} alt="flag" />{" "}
                    {onHover.selector ? <ArrowDropUp /> : <ArrowDropDown />}
                  </p>
                  <ul className={onHover.selector ? "active" : ""}>
                    {options.map((item, index) => {
                      if (item.title !== selected.title) {
                        return (
                          <li
                            key={item.title + index}
                            onClick={() => languageChanger(item)}
                          >
                            {" "}
                            {t(item.title)} <img src={item.icon} alt="flag" />
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*___________________________________________________________________________________________________________________________________ */}
      </div>
    </header>
  );
};

export default Header;
