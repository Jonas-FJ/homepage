import {BrowserRouter, Routes, Route} from 'react-router-dom';
import constructionImg from './assets/mathieu-stern-construction-unsplash.jpg';
import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './layouts/Header.jsx';
import Bio from './layouts/BioSection.jsx';
import Navbar from './layouts/Navbar.jsx';
import Etp from './pages/Etp.jsx';
import Timeline from './pages/Timeline.jsx';


function App() {
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <Bio />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Timeline />} />
          <Route path="/etp" element={<Etp />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
