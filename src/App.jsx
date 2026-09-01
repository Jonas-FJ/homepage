import {BrowserRouter, Routes, Route} from 'react-router-dom';
import constructionImg from './assets/mathieu-stern-construction-unsplash.jpg';
import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './layouts/Header.jsx';
import Bio from './layouts/BioSection.jsx';
import Navbar from './layouts/Navbar.jsx';
import Home from './pages/Home.jsx';
import Etp from './pages/Etp.jsx';
import Animation from './pages/Animation.jsx'
import Timeline from './pages/Timeline.jsx';


function App() {
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <Bio />
      <BrowserRouter>
        <Navbar />
        <section className="contentSection">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/etp" element={<Etp />} />
          <Route path="/animation" element={<Animation />} />
          {/*<Route path="/timeline" element={<Timeline />} />*/}
        </Routes>
        </section>
      </BrowserRouter>

    </>
  );
}

export default App;
