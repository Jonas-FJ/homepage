import { useTranslation } from 'react-i18next';
import './Etp.css';


function Etp () {
    const {t} = useTranslation();

    return (
        <article>
            <h2>{t("etp.heading")}</h2>
            <p>{t("etp.description")}</p>
        </article>
    );
}

export default Etp;
