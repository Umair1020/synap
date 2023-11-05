import React, { useRef } from 'react'
import Header from '../components/Header/Header'
import Card1 from '../components/card/Card'
import Footer from '../components/Footer/Footer'
import "../App.css"
import { useMediaQuery } from 'react-responsive'
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import styles from "../components/Footer/footer.module.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "./service.module.css"
import { Link } from 'react-router-dom'

const Services = () => {
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
    <div>

      <section className='services'>
        <Header />
        <div className="slide-wrap dark-overlay">
          <div className="slidecontent">

            <div>
              <img src="/service.jpg" className="serviceimage " alt="backround" />

            </div>
            <p className='servicep text-center text-light' >THIS IS WHAT WE DO.</p>
            <h1 className='serviceh1 text-center text-light'>Our Services</h1>

          </div>
        </div>
        {/* <div class="container"> */}
        <Mobile>
          <div class="row">
            <Slider ref={sliderRef} {...settings}>
              <div class="col-md-4 col-sm-3"><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <div class="container">

                  <div class="overlay">
                    <div class="items"></div>
                    <div class="items head">
                      <p>Web Design & <br /> Web Developmentrt</p>
                      <hr />
                    </div>
                    <div class="items price">
                      <p class="new">Affordable websites that work.</p>
                    </div>
                    <div class="items cart">
                     
                      <Link to='/web'><span>Read More</span></Link>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-md-4 col-sm-3"><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <div class="container">

                  <div class="overlay">
                    <div class="items"></div>
                    <div class="items head">
                      <p>Mobile Application </p>
                      <hr />
                    </div>
                    <div class="items price">
                      <p class="new">Our solution is your success.</p>
                    </div>
                    <div class="items cart">
                     
                      <Link to='/logo'><span>Read More</span></Link>
                    </div>
                  </div>
                </div>

              </div>
              <div class=" col-md-4 col-sm-3"><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <div class="container">

                  <div class="overlay">
                    <div class="items"></div>
                    <div class="items head">
                      <p>Domain & <br /> Hosting</p>
                      <hr />
                    </div>
                    <div class="items price">
                      <p class="new"> Affordable websites that work</p>
                    </div>
                    <div class="items cart">
                     
                      <span>Read More</span>
                    </div>
                  </div>
                </div>

              </div>

              <div class=" col-md-4 col-sm-3"><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <div class="container ">

                  <div class="overlay">
                    <div class="items"></div>
                    <div class="items head">
                      <p> UI/UX Designing </p>
                      <hr />
                    </div>
                    <div class="items price">
                      <p class="new"> It’s how the world sees <br /><br /><br /> you!</p>
                    </div>
                    <div class="items cart">
                     
                      <span>Read More</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" col-md-4  col-sm-3">
                <div class="container">

                  <div class="overlay">
                    <div class="items"></div>
                    <div class="items head">
                      <p>Flower Embroidery Hoop Art</p>
                      <hr />
                    </div>
                    <div class="items price">
                      <p class="old">$699</p>
                      <p class="new">$345</p>
                    </div>
                    <div class="items cart">
                     
                      <span>ADD TO CART</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>

          </div>
        </Mobile>
        <Desktop>

          <div class="row">
            <div class="col-md-4 col-sm-3"> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              <div class="container">

                <div class="overlay">
                  <div class="items"></div>
                  <div class="items head">
                    <p>Web Design & <br /> Web Developmentrt</p>
                    <hr />
                  </div>
                  <div class="items price">
                    <p class="new">Affordable websites that  <br /> <br /> <br />   <br /> <br /> <br />work.</p>
                  </div>
                  <div class="items cart">
                   
                    <Link to='/web'><span>Read More</span></Link>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-md-4 col-sm-3"> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              <div class="container">

                <div class="overlay">
                  <div class="items"></div>
                  <div class="items head">
                    <p>Mobile Application </p>
                    <hr />
                  </div>
                  <div class="items price">
                    <p class="new">Our solution is your  <br /> <br /> <br /> success.</p>
                  </div>
                  <div class="items cart">
                   
                    <Link to='/logo'><span>Read More</span></Link>
                  </div>
                </div>
              </div>

            </div>
            <div class=" col-md-4 col-sm-3"> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              <div class="container">

                <div class="overlay">
                  <div class="items"></div>
                  <div class="items head">
                    <p>Domain & <br /> Hosting</p>
                    <hr />
                  </div>
                  <div class="items price">
                    <p class="new"> Affordable websites that  <br /> <br /> <br /> work</p>
                  </div>
                  <div class="items cart">
                   
                    <Link to='/flyer'><span>Read More</span></Link>
                  </div>
                </div>
              </div>

            </div>
            <div className='row justify-content-center'>
              <div class=" col-md-4   col-sm-3"><br /> <br /> <br /> <br />
                <div class="container ">

                  <div class="overlay">
                    <div class="items"></div>
                    <div class="items head">
                      <p> UI/UX Designing </p>
                      <hr />
                    </div>
                    <div class="items price">
                      <p class="new"> It’s how the world sees <br /><br /><br /> you!</p>
                    </div>
                    <div class="items cart">
                     
                      <Link to='/socialmedia'><span>Read More</span></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" col-md-4  col-sm-3"><br /> <br /> <br /> <br />
                <div class="container">

                  <div class="overlay">
                    <div class="items"></div>
                    <div class="items head">
                      <p>Flower Embroidery Hoop Art</p>
                      <hr />
                    </div>
                    <div class="items price">
                      <p class="old">$699</p>
                      <p class="new">$345</p>
                    </div>
                    <div class="items cart">
                     
                      <span>ADD TO CART</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Desktop>
      </section>

      <Footer />

    </div>
  )
}

export default Services