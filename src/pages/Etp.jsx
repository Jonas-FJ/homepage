import { useTranslation } from 'react-i18next';
import './Etp.css';
import Popout from '../layouts/PopoutImg.jsx';
import Slideshow from '../layouts/Slideshow.jsx';
import group from '../assets/etpAssets/img_group_photo.JPG';
import birdcage from '../assets/etpAssets/birdcage.JPG';
import birdClose from '../assets/etpAssets/bird.JPG'
import clock from '../assets/etpAssets/clock.jpg';
import assembly from '../assets/etpAssets/cageAssembly.JPG';
import expo from '../assets/etpAssets/slim_samenleven_portrait.jpg';


function Etp () {
    const {t} = useTranslation();

    const imgArray = [
        {src:group, alt:t("etp.imgGroupAlt"), caption:t("etp.imgGroupCaption")},
        {src: birdcage, alt:t("etp.imgBirdcageAlt"), caption:t("etp.imgBirdcageCaption")},
        {src: birdClose, alt:t("etp.imgBirdCloseAlt"), caption:t("etp.imgBirdCloseCaption")},
        {src: clock, alt:t("etp.imgClockAlt"), caption:t("etp.imgClockCaption")},
    ];
    const showcaseArray = [
        {src:group, alt:t("etp.imgGroupAlt"), caption:t("etp.imgGroupCaption")},
        {src: birdClose, alt:t("etp.imgBirdCloseAlt"), caption:t("etp.imgBirdCloseCaption")},
        {src: assembly, alt:t("etp.imgAssemblyAlt"), caption:t("etp.imgAssemblyCaption")},
        {src: expo, alt:t("etp.imgExpoAlt"), caption:t("etp.imgExpoCaption")}
    ];

    return (
        <article className="etpArticle">

            {/*ETP intro */}
            <div className="item">
                <h2>{t("etp.heading")}</h2>
                <p>{t("etp.description")}</p>
                <p>{t("etp.content01")}</p>
            </div>
            <div className="imgItem">
                <Popout
                img={imgArray[0]}
                propsClass=""
                captionVisibility={true}
                imgClassName="etpImg"
                />
            </div>

            {/*Living at home section */}
            <div className="item">
                <h3>{t("etp.heading02")}</h3>
                <p>{t("etp.content02")}</p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7349440406775910401/"> {t("etp.link02")}</a>
            </div>

            <div className="imgItem">
                <Popout
                img={imgArray[3]}
                propsClass=""
                captionVisibility={true}
                imgClassName="etpImg"
                />
            </div>

            {/*ORACLE Section*/}
            <div>
                <h3>{t("etp.heading03")}</h3>
                <p>{t("etp.content03")}</p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7349449659414679556/"> {t("etp.link03")}</a>
            </div>

            <div className="imgItem">
                <Popout
                img={imgArray[1]}
                propsClass=""
                captionVisibility={true}
                imgClassName="etpImg"
                />
                <Popout
                img={imgArray[2]}
                propsClass=""
                captionVisibility={true}
                imgClassName="etpImg"
                />
            </div>

            <div className="slideshowItem">
            <h3>{t("etp.heading04")}</h3>
                <Slideshow array={showcaseArray} sectionClass="slideshowSectionProp">
                </Slideshow>
            </div>
        </article>
    );
}

export default Etp;
