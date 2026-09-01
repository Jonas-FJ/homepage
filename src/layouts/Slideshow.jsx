import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import './Slideshow.css';
import Popout from '../layouts/PopoutImg.jsx';
import arrow from '../assets/icons/arrow.svg';

function Slideshow(props) {
    const [currentIndex, setIndex] = useState(0);
    const [img, setImg] = useState(props.array[currentIndex]);


    const handleImgChange = (buttonName) => {
        console.log(buttonName);
        if (buttonName == "next" && currentIndex < (props.array.length - 1)) {
            console.log("true next " + currentIndex);
            setIndex(currentIndex + 1);
            setImg(props.array[currentIndex]);
            return;
        } else if (buttonName == "previous" && currentIndex > 0) {
            console.log("true back " + currentIndex);
            setIndex(currentIndex - 1);
            setImg(props.array[currentIndex]);
            return;
        } else {
            console.log("An eror with the slidshow button has happend");
            return;
        }
    }

    const sectionClass = "slideshowSection " + props.sectionClass;

    return(
        <section className={sectionClass}>

            <button
                className="buttonNext arrow"
                type="button"
                name="next"
                onClick={() => handleImgChange("next")}
            >
                <img
                src={arrow}
                className="next"
                />
            </button>

            <Popout
            propsClass="popout"
            img={props.array[currentIndex]}
            captionVisibility={false}
            imgClassName="mainImg"
            />
            <p className="caption">{props.array[currentIndex].caption}</p>
            <button
                className="buttonPrevious arrow"
                type="button"
                name="previous"
                onClick={() => handleImgChange("previous")}
            >
                <img
                src={arrow}
                />
            </button>
        </section>
    )

}

export default Slideshow;
