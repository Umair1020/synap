import styles from '../../index.module.css'
import style from './portfolio.module.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "../../App.css"
import "animate.css"
// import img1 from "../image/Shariq.jpeg"
// import img2 from "../image/abbas.png"
// import img3 from "../image/mansoor.png"
// import img4 from "../image/areeb.png"

const Portfoliocomp = () => {

    const [images, setImages] = useState([
        './rectangle-32@2x.png',
        './rectangle-33@2x.png',
        './rectangle-34@2x.png',
    ]);

    const [selectedButton, setSelectedButton] = useState("webDesign");

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };
    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const renderImages = () => {
        switch (selectedButton) {
            case 'webDesign':
                return (
                    <div>
                        <div><img className={styles.rectangleIcon} alt="" src={images[2]} /></div>
                        <div><img className={styles.frameChild2} alt="" src={images[0]} /></div>
                        <div><img className={styles.frameChild3} alt="" src={images[1]} /></div>
                        {/* Rest of the code */}
                    </div>
                );
            case 'logoDesign':
                return (
                    <div>
                        <div><img className={styles.rectangleIcon} alt="" src={images[0]} /></div>
                        <div><img className={styles.frameChild2} alt="" src={images[2]} /></div>
                        <div><img className={styles.frameChild3} alt="" src={images[1]} /></div>
                        {/* Rest of the code */}
                    </div>
                );
            case 'appDesign':
                return (
                    <div>
                        <div><img className={styles.rectangleIcon} alt="" src={images[1]} /></div>
                        <div><img className={styles.frameChild2} alt="" src={images[0]} /></div>
                        <div><img className={styles.frameChild3} alt="" src={images[2]} /></div>
                        {/* Rest of the code */}
                    </div>
                );
            case 'development':
                return (
                    <div>
                        <div><img className={styles.rectangleIcon} alt="" src={images[2]} /></div>
                        <div><img className={styles.frameChild2} alt="" src={images[1]} /></div>
                        <div><img className={styles.frameChild3} alt="" src={images[0]} /></div>
                        {/* Rest of the code */}
                    </div>
                );
            default:
                return null;
        }
    };

    const handleClick = () => {
        setImages(prevImages => {
            const newImages = [...prevImages];
            // Swap the positions of the first and second images
            [newImages[0], newImages[1]] = [newImages[1], newImages[0]];
            // Swap the positions of the second and third images
            [newImages[1], newImages[2]] = [newImages[2], newImages[1]];
            return newImages;
        });
    };
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="portfolio">

            <div>
                <Mobile>
                    <select className="form-select select" aria-label="Default select example">
                        <option className={`option ${selectedButton === 'webDesign' ? styles.active : ''}`} selected onClick={() => handleButtonClick('webDesign')}>Web Design</option>
                        <option className={`option ${selectedButton === 'logoDesign' ? styles.active : ''}`} value="1" onClick={() => handleButtonClick('logoDesign')}>Logo Design</option>
                        <option className={`option ${selectedButton === 'appDesign' ? styles.active : ''}`} value="2" onClick={() => handleButtonClick('appDesign')} >App Design</option>
                        <option className={`option ${selectedButton === 'development' ? styles.active : ''}`} value="3" onClick={() => handleButtonClick('development')}>Development</option>
                    </select>
                    <Slider ref={sliderRef} {...settings}>
                        <div className={style.card2} style={{ width: "18rem" }} key={1}>
                            <img src="./rectangle-32@2x.png" className={style.cardimg} alt="..." />

                        </div>
                        <div className={style.card2} style={{ width: "18rem" }} key={2}>
                            <img src="./rectangle-33@2x.png" className={style.cardimg} alt="..." />

                        </div>
                        <div className={style.card2} style={{ width: "18rem" }} key={3}>
                            <img src="./rectangle-34@2x.png" className={style.cardimg} alt="..." />

                        </div>

                    </Slider>
                    <span className={styles.frameChild4} onClick={previous} alt="" src="/group-31.svg" > <FaArrowCircleLeft /></span>
                    <span className={styles.frameChild5} onClick={next} alt="" src="/group-32.svg" ><FaArrowCircleRight /></span>
                    <div className={style.viewall}>
                        <button className={style.view}>View All</button>
                        <div> <img className={`animate__animated ${style.arrowAnimation}`} alt="" src="/vector.svg" /></div>
                    </div>
                </Mobile>
            </div>
            <div>
                <Desktop>
                    <div className={styles.groupContainer}>
                        <div className={styles.groupDiv}>
                            <button
                                className={`${styles.groupChild2}`}
                                onClick={() => handleButtonClick(null)}
                                style={{ backgroundColor: selectedButton === null ? 'red' : '' }}
                            />
                            <button
                                className={`${styles.webDesign} ${selectedButton === 'webDesign' ? styles.active : ''}`}
                                onClick={() => handleButtonClick('webDesign')}
                                style={{ backgroundColor: selectedButton === 'webDesign' ? 'red' : '' }}
                            >
                                Web Design
                            </button>
                        </div>

                        <div className={styles.rectangleParent1}>
                            <button
                                className={`${styles.rectangleDiv}`}
                                onClick={() => handleButtonClick(null)}
                                style={{ backgroundColor: selectedButton === null ? 'red' : '' }}
                            />
                            <button
                                className={`${styles.logoDesign} ${selectedButton === 'logoDesign' ? styles.active : ''}`}
                                onClick={() => handleButtonClick('logoDesign')}
                                style={{ backgroundColor: selectedButton === 'logoDesign' ? 'red' : '' }}
                            >
                                Logo Design
                            </button>
                        </div>

                        <div className={styles.rectangleParent2}>
                            <button
                                className={`${styles.rectangleDiv}`}
                                onClick={() => handleButtonClick(null)}
                                style={{ backgroundColor: selectedButton === null ? 'red' : '' }}
                            />
                            <button
                                className={`${styles.appDesign} ${selectedButton === 'appDesign' ? styles.active : ''}`}
                                onClick={() => handleButtonClick('appDesign')}
                                style={{ backgroundColor: selectedButton === 'appDesign' ? 'red' : '' }}
                            >
                                App Design
                            </button>
                        </div>

                        <div className={styles.rectangleParent3}>
                            <button
                                className={`${styles.rectangleDiv}`}
                                onClick={() => handleButtonClick(null)}
                                style={{ backgroundColor: selectedButton === null ? 'red' : '' }}
                            />
                            <button
                                className={`${styles.development} ${selectedButton === 'development' ? styles.active : ''}`}
                                onClick={() => handleButtonClick('development')}
                                style={{ backgroundColor: selectedButton === 'development' ? 'red' : '' }}
                            >
                                Development
                            </button>
                        </div>
                        {/* </div> */}
                        {renderImages()}
                        <div className={`button-container ${style.arrowbtn}`} >
                            <button className={`button `} onClick={handleClick}>
                                <FaArrowCircleLeft />
                            </button>
                            <button className={`button `} onClick={handleClick}>
                                <FaArrowCircleRight />
                            </button>
                        </div>
                        {/* <div className='button-container' >
                            <button onClick={handleClick} className={`${styles.frameChild4}`} alt="" src="/group-31.svg" > <FaArrowCircleLeft /></button>
                            <button onClick={handleClick} className={`${styles.frameChild5}`} alt="" src="/group-32.svg" ><FaArrowCircleRight /></button>
                        </div> */}
                        <div className={styles.frameChild6} />
                        <div className={styles.rectangleParent7}>
                            <div className={styles.groupChild12} />
                            <div className={styles.fullPicture}>
                                Full Picture
                            </div>
                        </div>

                    </div>
                </Desktop>
            </div>
        </div>
    )
}

export default Portfoliocomp