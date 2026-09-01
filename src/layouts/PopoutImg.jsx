import { useTranslation } from 'react-i18next';
import { useState} from 'react';
import './PopoutImg.css';


function PopoutImg(props) {
    const {t} = useTranslation();
    const [popoutActive, setPopoutActive] = useState(false);
    console.log(props.captionVisibility);
    let figStyle = {
        visibility: props.captionVisibility ? "visible" : "hidden"
    };

    let figClass = (popoutActive ? "popoutActive" : "popoutInactive") + (props.propsClass ? " " + props.propsClass : "" );
    return(
        <figure
        className={figClass}
        onClick={() => setPopoutActive(prev => !prev)}>
            <img
            className={props.imgClassName}
            src={props.img.src}
            alt={props.img.alt}
            />
            <figcaption style={figStyle}>{props.img.caption}</figcaption>
        </figure>
    )
}

export default PopoutImg;
