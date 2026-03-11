import constructionImg from './assets/mathieu-stern-construction-unsplash.jpg';
import './App.css';
import Header from './layouts/Header.jsx';
import Bio from './layouts/BioSection.jsx';
import Navbar from './layouts/Navbar.jsx';
import { useTranslation } from 'react-i18next';

function App() {
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <Bio />
      <Navbar />

    </>
  );
}

export default App;
