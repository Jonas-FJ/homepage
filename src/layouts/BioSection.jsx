import { useTranslation, Trans } from 'react-i18next';
import './BioSection.css';
import potrett from '../assets/jonas_potrett.JPG';

function BioSection() {
    const {t} = useTranslation();

    return (
        <section className="bioSection">
            <div className="bio">
                <h1>Jonas Fjærestad</h1>
                <adress className="bioAdress">
                    <b>
                    {t("bio.contact")}
                    <a href="mailto:jonas.fjarestad@gmail.com">
                    {t("bio.email")}
                    </a>
                    {t("bio.address")}
                    </b>
                </adress>
                <p>{t("bio.content")}</p>
                <p>{t("bio.content02")}</p>
                <p>{t("bio.content03")}</p>
            </div>

            <img
                src={potrett}
                alt={t("bio.potrettImgAlt")}
                className="potrett"
            />
        </section>
    )
}

export default BioSection;
