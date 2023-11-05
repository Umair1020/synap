import styles from '../index.module.css'
import footer from "../components/Footer/footer.module.css"
import Header from '../components/Header/Header'
import style from "./about.module.css"
import { FaAngleDown } from "react-icons/fa"
import Carousel from '../components/card/Carousel';
import { useState } from 'react';
import { useMediaQuery } from "react-responsive"
// import Card from "../../components/card/Card"
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css"
import Footer from '../components/Footer/Footer'

const About = () => {
    const [images, setImages] = useState(['./image.png',]);
    const [image, setImage] = useState(['./banner.png',]);
    const [mob, setMob] = useState(['./mob.jpg',]);
    const [img1, setimg1] = useState(['./mansoor.png',]);
    const [img2, setimg2] = useState(['./zeeshan.png',]);
    const [img3, setimg3] = useState(['./shariq.png',]);
    const [img4, setimg4] = useState(['./abbas.png',]);
    const [img5, setimg5] = useState(['./areeb.png',]);
    const [img6, setimg6] = useState(['./yasir.png',]);
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    return (
        <>
            <section id='about'>

                <div className={style.about}>
                    <Header className={style.fixed} />
                    {/* <div className={styles.frameChild7} /> */}
                    <Link to='/'>
                        <div> <img className={styles.synapsLogo2} alt="" src="/synaps-logo-2@2x.png" /></div>
                        <div className={styles.synapsSolutions}>
                            <span style={{ color: "#fff" }}>{`Synaps `}</span>
                            <span className={styles.innovation}>Solutions</span>
                        </div>
                    </Link>
                    {/* <b className={styles.about}>ABOUT US</b> */}

                    <div className='row'>
                        <div className='col-lg-12'>
                            <Desktop><div>  <img className={style.banner} src={image} /></div>  </Desktop>
                            <Mobile>
                                <div>
                                    <img className={style.mob} src={mob} />
                                </div>
                                {/* <div className={style.circle}>
                                    <button>
                                    <FaAngleDown />
                                    </button>
                                </div> */}
                            </Mobile>

                        </div>

                    </div>
                    {/* <div className='row'>
                        <div className='col-lg-6'>
                            <div className={style.parent}>
                                <h4 className={style.h4}>Magic has a formula</h4>
                                <h3 className={style.hthree}>Providing the best competitive <br /> advantage to business</h3>
                                <p className={style.p}>We are Atomic, a digital marketing agency that helps companies of all sizes disrupt and digitally transform themselves within their industries through reasonably priced performance-driven  Web Design, UX/UI Design, Web Development, App Design, Google Ads, Facebook Ads,  and industry SEO Services</p>
                                <p className={style.span}>Our company has experienced explosive growth, results in campaigns, and transparency throughout. We have successfully carried out numerous digital transformations and raised some of the top firms in Pakistan and throughout the world across a wide range of industries.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={style.image}>
                                <img className={style.abtimage} src='/Rectangle45.svg' alt="" />
                            </div>
                        </div>
                    </div> */}
                    {/* <Footer /> */}
                    <div className={style.section3}>

                        <h2 className={style.h2}>Message from founder</h2>
                        <h3 className={style.ceodetail}>Sheraz Zafar</h3>
                        <h4 className={style.msg}>Message from CEO</h4>
                        <p className={style.para}>Chief Executive Officer of Synaps Solution Mr Sheraz Zafar. Mr Abrar has worked hard to make Syanps Solutions the best digital marketing company with the true goal of transforming the digital development industry. The portfolio includes three continents’ clients and a significant amount of new business from the North American market.

                            In his recent address, he stated, “The United States has largely been Pakistan’s biggest export market; in 2021, it imported more Pakistani goods than any other nation ($5 billion). Over the past 20 years, Pakistan has seen a lot of investment from the United States. U.S. direct investment in Pakistan surged by 50% in the most recent fiscal year, making it the highest in more than ten years.
                            <br /><br />
                            Our competitive advantage—high-quality work and client expectations—ultimately motivates us. With cutting-edge technologies at our grasp, we must adapt and evolve. Looking ahead, Synaps Solution is committed to accelerating its growth strategy’s implementation while maintaining the brand’s power. We do this by assisting our clients in sharing knowledge and innovating, as well as by bringing about a good change in the communities where we work and live. <br />
                            <br />
                            Sincerely,<br />
                            Sheraz Zafar<br />
                            Chief Executive Officer<br />

                        </p>
                    </div> <br />
                    <Carousel images={images} img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} />

                </div>
                {/* <div className={styles.frameChild78} /> */}

            </section> 
            <div className={style.footersec}>
                <Footer />
            </div>
        </>
    )
}

export default About