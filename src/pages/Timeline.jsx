import { useTranslation } from 'react-i18next';
import './Timeline.css';


function Timeline () {
    const {t} = useTranslation();

    return (
        <article>
            <h2>{t("timeline.heading")}</h2>
            <p>{t("timeline.description")}</p>
        </article>
    );
}

export default Timeline;
