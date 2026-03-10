import constructionImg from './assets/mathieu-stern-construction-unsplash.jpg';
import './App.css'
import Header from './layouts/Header.jsx'
import { useTranslation } from 'react-i18next';

function App() {
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <div className="construction">
        <figure>
          <img src={constructionImg} className="constructionImg"/>
          <figcaption> {t("heading.imgtext")} {'\u00A0'}
            <a href="https://unsplash.com/photos/3-men-in-white-and-orange-shirts-and-green-pants-action-figures-tv7GF92ZWvs">
              Unsplash
            </a>
          </figcaption>

        </figure>
        <h1>{t("heading.title")} </h1>
        <h2>{t("heading.subtitle")}</h2>
      </div>
    </>
  );
}

export default App;
