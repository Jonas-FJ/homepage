import { useTranslation } from 'react-i18next';
import './BioSection.css';
import potrett from '../assets/jonas_potrett.JPG';

function BioSection() {
    const {t} = useTranslation();

    return (
        <section>
            <div className="bio">
                <h1>Jonas Fjærestad</h1>
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
