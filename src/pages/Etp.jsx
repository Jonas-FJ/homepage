import { useTranslation } from 'react-i18next';
import './Etp.css';
import group from '../assets/etpAssets/img_group_photo.JPG';


function Etp () {
    const {t} = useTranslation();

    return (
        <article className="etpArticle">
            <div className="container">
                <div className="item">
                    <h2>{t("etp.heading")}</h2>
                    <p>{t("etp.description")}</p>
                    <p>{t("etp.content01")}</p>
                </div>
                <figure className="etpFigure">
                    <img
                        className="etpImg"
                        style={{flexGrow: 2}}
                        src={group}
                        alt={t("etp.imgGroupAlt")}
                    />
                    <figcaption>{t("etp.imgGroupCaption")}</figcaption>
                </figure>
            </div>

            <div>
                <h3>{t("etp.heading02")}</h3>
                <p>{t("etp.content02")}</p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7349440406775910401/"> {t("etp.link02")}</a>
            </div>

            <div>
                <h3>{t("etp.heading03")}</h3>
                <p>{t("etp.content03")}</p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7349449659414679556/"> {t("etp.link03")}</a>
            </div>


            <h3>{t("etp.heading04")}</h3>
        </article>
    );
}

export default Etp;
