import style from "./footer.module.css"
import { useMediaQuery } from 'react-responsive'
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../../App.css"

const Footer = () => {
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
            <div>
                <footer className={style.footer}>
                    <div className={style.waves}>
                        <div className={style.wave} id={style.wave1}></div>
                        <div className={style.wave} id={style.wave2}></div>
                        <div className={style.wave} id={style.wave3}></div>
                        <div className={style.wave} id={style.wave4}></div>
                    </div>
                    <ul className={style['social-icon']}>
                        <li className={style['social-icon__item']}>
                            <a className={style['social-icon__link']} href="#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className={style['social-icon__item']}>
                            <a className={style['social-icon__link']} href="#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li className={style['social-icon__item']}>
                            <a className={style['social-icon__link']} href="#">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        {/* Add other social icon links */}
                    </ul>
                    <ul className={style.menu}>
                        <li className={style['menu__item']}>
                            <a className={style['menu__link']} href="#">
                                Home
                            </a>
                        </li>
                        <li className={style['menu__item']}>
                            <a className={style['menu__link']} href="#">
                                About
                            </a>
                        </li>
                        <li className={style['menu__item']}>
                            <a className={style['menu__link']} href="#">
                                Services
                            </a>
                        </li>
                        <li className={style['menu__item']}>
                            <a className={style['menu__link']} href="#">
                                Team
                            </a>
                        </li>
                        <li className={style['menu__item']}>
                            <a className={style['menu__link']} href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
                </footer>
                {/* <Desktop>
                <div className={style.rectangleParent9} id="footer">
                    <div className={style.groupChild20} />
                    <img className={style.vectorIcon2} alt="" src="/vector1.svg" />
                    <div className={style.twitter}>Twitter</div>
                </div>
                <div className={style.rectangleParent10}>
                    <div className={style.groupChild21} />
                    <FaFacebookF />
                    <img className={style.vectorIcon3} alt="" src="/vector2.svg" />
                    <div className={style.facebook}>Facebook</div>
                </div>

                <div className={style.rectangleParent11}>
                    <div className={style.groupChild22} />
                    <img className={style.vectorIcon4} alt="" src="/vector3.svg" />
                    <div className={style.linkedIn}>Linked In</div>
                </div>
                <div className={style.rectangleParent12}>
                    <div className={style.groupChild23} />
                    <div className={style.subscribeToOur}>
                        Subscribe to our news letter
                    </div>
                </div>
                <div className={style.synapsSolutionsSoftwareIncParent}>
                    <div className={style.synapsSolutionsSoftware}>
                        2023, Synaps Solutions Software Inc., All Rights Reserved.
                    </div>
                    <div className={styles.cParent}>
                        <div className={style.c}>C</div>
                        <div className={style.groupChild24} />
                    </div>
                </div>
            </Desktop>
            </div>
            <div>
            <Mobile>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            <div className={styles.groupChild20}>
                                <div className={styles.facebook}><FaFacebook /></div>
                            </div>
                            <div className={styles.groupChild21}>
                                <div className={styles.linkedin}><FaTwitter /></div>
                            </div>
                            <div className={styles.groupChild22}>
                                <div className={styles.twitter}><FaLinkedinIn /></div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button className={styles.subscribe}>Subscribe To Our News Letter</button>
                        </div>
                        <div className="col-lg-12">
                            <span className={styles.span}>2023, Synaps Solutions Software Inc., All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </Mobile> */}
            </div>
        </>
    )
}

export default Footer