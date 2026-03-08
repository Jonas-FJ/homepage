import { useState } from 'react';
import './header.css'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function Header() {
    const [lang, setLang] = useState(i18next.language);
    const {t, i18n } = useTranslation();
    const handleLanguageChange = (languageCode) => {
        setLang(languageCode);
        i18next.changeLanguage(languageCode);

    };
    return (
        <header>
            <div><p>Dark/Light mode </p> </div>

            <div className="buttonItem">
                <p className="språk"> {t("language")} </p>
                <button
                    type="button"
                    onClick={() => handleLanguageChange("no")}
                >
                    <p>NO</p>
                    <img
                        src="src/assets/standard_norges_flagg.svg"
                        alt="Norges flagg"
                        height="20"
                    />
                </button>
                <p className="divider">|</p>

                <button
                type="button"
                onClick={()=> handleLanguageChange("en")}
                >
                    <p>EN</p>
                    <img
                    src="src/assets/standard_storbritannia-flagg.svg"
                    alt="UK flag"
                    height="20"
                    />
                </button>
            </div>
        </header>
    );
}

export default Header;
