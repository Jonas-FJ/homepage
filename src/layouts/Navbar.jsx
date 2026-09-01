import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    const {t} = useTranslation();


    return (
        <nav>
            {/*<Link to="/timeline"> {t("timeline.link")} </Link>*/}
            <Link to="/home">Home</Link>
            <Link to="/etp"> {t("etp.link")} </Link>
            <Link to="/animation"> {t("animation.link")} </Link>
        </nav>
    );
}

export default Navbar;
