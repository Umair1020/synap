import style from './card.module.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../App.css"
import 'animate.css';

const Card1 = () => {
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
        <>
            <div id='services' >
                <Slider ref={sliderRef} {...settings}>
                    
                    <div className='parentcard' key={1}>
                        <div className='card1' >
                            <div className='div'>01</div>
                            <h2 className='webDesignContainer'>Web Design & <br /> Web Development </h2>
                            <p className='loremIpsumIs'>   Affordable websites that work. </p>

                        </div>
                        <button className='btn1 animate-button'>
                            <div className={style.learnMore}>
                                <span>{`Learn `}</span>
                                <span className={style.innovation}>More</span>
                            </div>
                            <div> <img className={`animate__animated ${style.arrowAnimation}`} alt="" src="/vector.svg" /></div>
                        </button>
                    </div>
                    <div className='parentcard' key={2}>
                        <div className='card1' >
                        <h2 className='div'>02</h2>

                            <h2 className='webDesignContainer'>Mobile Application </h2>
                            <p className='loremIpsumIs'>Our solution is your success.</p>
                            
                        </div>

                        <button className='btn1 animate-button'>
                            <div className={style.learnMore}>
                                <span>{`Learn `}</span>
                                <span className={style.innovation}>More</span>
                            </div>
                            <div> <img className={`animate__animated ${style.arrowAnimation}`} alt="" src="/vector.svg" /></div>
                        </button>
                    </div>
                    <div className='parentcard' key={3}>
                        <div className='card1' >
                            <div className='div'>03</div>
                            <h2 className='webDesignContainer'>Domain & <br /> Hosting </h2>
                            <p className='loremIpsumIs'>  Affordable websites that work.</p>
                        </div>
                        <button className='btn1 animate-button'>
                            <div className={style.learnMore}>
                                <span>{`Learn `}</span>
                                <span className={style.innovation}>More</span>
                            </div>
                            <div>
                            <img className={`animate__animated ${style.arrowAnimation}`} alt="" src="/vector.svg" />
                                {/* <img className={`animate__animated animate__shakeX animate__infinite ${style.vectorIcon}`} alt="" src="/vector.svg" /> */}
                                </div>
                        </button>
                    </div>
                    <div className='parentcard' key={4}>
                        <div className='card1' >
                            <div className='div'>04</div>
                            <h2 className='webDesignContainer'> UI/UX Designing </h2>
                            <p className='loremIpsumIs'> It’s how the world sees you!</p>
                        </div>
                        <button className='btn1 animate-button'>
                            <div className={style.learnMore}>
                                <span>{`Learn `}</span>
                                <span className={style.innovation}>More</span>
                            </div>
                            <div> <img className={`animate__animated ${style.arrowAnimation}`} alt="" src="/vector.svg" /></div>
                        </button>
                    </div>
                </Slider>
                <div className='button-container' >
                    <button className="button" onClick={previous}>
                        <FaChevronLeft />
                    </button>
                    <button className="button" onClick={next}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>

        </>


    )
}

export default Card1