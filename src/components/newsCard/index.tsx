import "./style.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
interface IProps {
  img: string;
  title: string;
  content: string;
}
const NewsCard = ({ img, title, content }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className="P-newsCard">
      <img src={img} alt="news" width="247" height="137" />
      <div className="P-content">
        <h5>{title}</h5>
        <p>{content}</p>
        <NavLink to="">
          <span>{t("READ_MORE-text")}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NewsCard;
