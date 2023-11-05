import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import { FaChevronLeft, FaChevronRight, FaEye, FaTimes } from "react-icons/fa";
import style from "./card.module.css"
import Header from "../Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css"
import { useMediaQuery } from 'react-responsive';

const Carousel = ({ img1, img2, img3, img4, img5, img6 }) => {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    const modal = [
        { id: 1, name: 'Mansoor hussain', jobTitle: 'Sr devOps engr', img: img1 },
        { id: 2, name: 'Shariq Mehmood', jobTitle: 'React native developer', img: img2 },
        { id: 3, name: 'Muhammad Zeeshan', jobTitle: 'React native developer', img: img3 },
        { id: 5, name: 'Muhammad Areeb', jobTitle: 'Full STack developer', img: img5 },
        { id: 6, name: 'Muhammad Yasir', jobTitle: 'Sr React js developer', img: img6 },
        { id: 4, name: 'Mohammad Abbas', jobTitle: 'React native developer', img: img4 },
    ];

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
 
    const cursorRef = useRef(null);
    const cursor2Ref = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const cursorElement = cursorRef.current;
            const cursor2Element = cursor2Ref.current;

            if (cursorElement && cursor2Element) {
                cursorElement.style.left = clientX + "px";
                cursorElement.style.top = clientY + "px";

                // Calculate the position for the center of the cursor2 element
                const cursor2Width = cursor2Element.offsetWidth;
                const cursor2Height = cursor2Element.offsetHeight;
                const cursor2Left = clientX - cursor2Width / 2 + "px";
                const cursor2Top = clientY - cursor2Height / 2 + "px";

                cursor2Element.style.left = cursor2Left;
                cursor2Element.style.top = cursor2Top;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

   
    const handleShowProfile = (index) => {
        if (index === currentSlide) {
            // Code to open the modal for the center card
            console.log(`Open modal for card ${index}`);
        } else {
            // Slide to the clicked card
            sliderRef.current.slickGoTo(index);
        }
        setShowModal(true);
        setCurrentCard(modal[index]);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };
    const modalStyles = {
        overlay: {
            backgroundColor: '#000',
        },
        content: {
            // position: 'absolute',
            // top: "50%", // Adjust the position to show close icon below the cursor
            left: "25%", // Adjust the position to center the close icon below the cursor
            // transform: 'translate(-50%, -50%)',
            background: '#fff',
            padding: "0px !important",
            borderRadius: '8px',
            width: '100%',
            maxWidth: '800px',
            height: '1000vh',
            maxHeight: '85vh',
            display: 'flex',
            alignItems: 'flex-start', // Align content at the top
            justifyContent: 'center', // Align image in the center
            // overflow: 'auto',
        },
        '@media only screen and (max-width: 768px)': { // Adjust the screen size value to fit your mobile breakpoint
            left: '0% !important', // Set left to 0% on mobile devices
        },
    };

    const settings = {
        centerMode: true,
        // centerPadding: '140px',
        slidesToShow: 3,
        beforeChange: (current, next) => {
            setCurrentSlide(next);

        },
        afterChange: (current) => {
            setCurrentSlide(current);
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
            <h3 className={style.team}>Our Team</h3>
            <br />
            <Slider ref={sliderRef} {...settings}>
            {modal.map((card, index) => (
                    <div className="movie-card" key={card.id}>
                        <div className={currentSlide === index ? 'center' : 'side'} key={card.id}>
                            <div className={style.card} onClick={(event) => handleShowProfile(index, event)}>
                                <div><img className={style.slickslide} src={card.img} /></div>
                                <h5 className='h5'>{card.name}</h5>
                                <p className='small'>{card.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {showModal && currentCard !== null && (
                <>
                    <Modal
                        isOpen={showModal}
                        onRequestClose={handleCloseModal}
                        style={modalStyles}
                    >

                        <div className='row'>
                            <div className={style.modalContent} key={currentCard.id}>
                                <div className={style.close} style={{ top: cursorPos.y - 30, left: cursorPos.x - 70, }}>
                                    <button className={style.modalCloseButton} onClick={handleCloseModal}>
                                        <FaTimes />
                                    </button>
                                </div>
                                <Desktop>
                                    <div ref={cursorRef} className={style.cursor}></div>
                                    <div ref={cursor2Ref} className={style.cursor2}>
                                        <div className={style.close} style={{ top: cursorPos.y - 30, left: cursorPos.x - 70, }}>
                                            <button className={style.modalCloseButton} onClick={handleCloseModal}>
                                                <FaTimes />
                                            </button>
                                        </div>
                                    </div>
                                </Desktop>
                                <div className='col-lg-6 text'>
                                    <div className={style.modeltext}>
                                        <h5 className={style.ceo}>{currentCard.jobTitle}</h5>
                                        <p className={style.modelh2}>{currentCard.name}</p>
                                        <p className={style.modelpara}>Sheraz Zafar is in charge of supervising the overall operations of the company. Delegating and guiding agendas, driving profitability, managing corporate organizational structure, strategy, and engaging with the board.</p>
                                    </div>
                                </div>

                                <div className='col-lg-6 image'>
                                    <div className={style.modalImage}>
                                        <img className={style.modalImg} src={currentCard.img} alt="Profile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </>
            )}
            <div className='button-container' >
                <button className="button" onClick={previous}>
                    <FaChevronLeft />
                </button>
                <button className="button" onClick={next}>
                    <FaChevronRight />
                </button>
            </div>
        </>
    )
}

export default Carousel