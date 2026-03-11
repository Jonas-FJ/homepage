import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
        <BrowserRouter>
            <nav>
                <Link>Test </Link>
                <Link>Test </Link>
            </nav>

            <Routes>

            </Routes>
        </BrowserRouter>
    );
}

export default Navbar;
