import { useTranslation } from 'react-i18next';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';
import bird from '../assets/homeImg/bird.jpg';
import clock from '../assets/homeImg/clock.jpg';
import robot from '../assets/homeImg/robotTiny.jpg';
import car from '../assets/homeImg/carTiny.jpg';


function Home() {
        const {t} = useTranslation();
        const [etpSrc, setEtpSrc] = useState(bird);
        const [animSrc, setAnimSrc] = useState(car);

    return (
        <>
            <section className="homeSection">
                <div className="homeItem"
                onMouseOver={() => setEtpSrc(clock)}
                onMouseOut={() => setEtpSrc(bird)}
                >
                    <Link to="/etp">
                        <img
                            src={etpSrc}
                        />
                        <p><b>Emerging technologies playground</b></p>
                    </Link>
                </div>

                <div className="homeItem"
                onMouseOver={() => setAnimSrc(robot)}
                onMouseOut={() => setAnimSrc(car)}
                >
                    <Link to="/animation">
                        <img
                            src={animSrc}
                        />
                        <p><b>{t("animation.link")}</b></p>
                        </Link>
                </div>
            </section>
        </>
    );
}

export default Home;
