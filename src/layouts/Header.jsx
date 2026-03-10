import { useState, useEffect } from 'react';
import './header.css'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import ukFlag from '../assets/standard_storbritannia-flagg.svg';
import noFlag from '../assets/standard_norges_flagg.svg';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

const modeConfig = {
    dark: {newMode:"light", newIcon: moon},
    light: {newMode:"dark", newIcon: sun}
};

const userThemePref = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

function Header() {
    const [lang, setLang] = useState(i18next.language);
    const {t, i18n } = useTranslation();
    const handleLanguageChange = (languageCode) => {
        setLang(languageCode);
        i18next.changeLanguage(languageCode);
    };



    const [mode, setMode] = useState(userThemePref);

    const [iconUrl, setIconUrl] = useState(
        mode == "dark" ? sun : moon
    );

    const handleModeChange = () => {
        const {newMode, newIcon } = modeConfig[mode];
        setMode(newMode);
        setIconUrl(newIcon);
        document.querySelector("meta[name='color-scheme']")
        .setAttribute("content", newMode);
    };


    return (
        <header>
            <div className="buttonItem">
                <p>{t("header.colorTheme")} </p>
                <button
                    type="button"
                    onClick={() => handleModeChange()}
                >
                <img
                    src={iconUrl}
                    alt="sun Icon"
                    className="icons"
                />
                </button>
            </div>

            <div className="buttonItem">
                <p className="språk"> {t("header.language")} </p>
                <button
                    type="button"
                    onClick={() => handleLanguageChange("no")}
                >
                    <p>NO</p>
                    <img
                        src={noFlag}
                        alt="Norges flagg"
                        className="icons"
                    />
                </button>
                <p className="divider">|</p>

                <button
                type="button"
                onClick={()=> handleLanguageChange("en")}
                >
                    <p>EN</p>
                    <img
                    src={ukFlag}
                    alt="UK flag"
                    className="icons"
                    />
                </button>
            </div>
        </header>
    );
}

export default Header;
