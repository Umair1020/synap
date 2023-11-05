import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import "./Portfolio.css"
import img1 from "./PortfolioImg/logo.jpeg"
import img2 from "./PortfolioImg/web.jpeg"
import img3 from "./PortfolioImg/social.jpeg"
import img4 from "./PortfolioImg/flyer.jpeg"
import Header from '../components/Header/Header'


const Portfolio = () => {

    return (
        <>
            <section id="portfolio" className="portfolio" >
                <Header />
                {/* <div className='container'> */}
                <div class="row portfolio-container">
                    <h1 className='portmain text-center text-light'>
                        Portfolio by Category  <br /><br />
                    </h1>

                    <div id="portfolio-grid" class="row no-gutter" >
                        <div class="item  col-sm-6 col-md-4 col-lg-4 mb-4 ">
                            <Link to="/logo" class="item-wrap fancybox my-3">
                                {/* <div class="work-info">
                                        <h3 className='fs-3'>Logo Design</h3>
                                        <span className=' '>Click to view full portfolio</span>
                                    </div> */}
                                <img class="logoimg " src={img1} alt="portfolio" />
                            </Link>
                        </div>
                        <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                            <Link to="/web" class="item-wrap fancybox my-3">
                                {/* <div class="work-info">
                                        <h3 className='fs-3'>Web Design</h3>
                                        <span>Click to view full portfolio</span>
                                    </div> */}
                                <img class="logoimg" src={img2} alt="portfolio" />
                            </Link>
                        </div>
                        <div class="item design col-sm-6 col-md-4 col-lg-4 mb-4  ">
                            <Link to="/socialmedia" class="item-wrap fancybox my-3">
                                {/* <div class="work-info">
                                        <h3 className='fs-3'>Social Media Campaign</h3>
                                        <span>Click to view full portfolio</span>
                                    </div> */}
                                <img class="logoimg" src={img3} alt="portfolio" />
                            </Link>
                        </div>
                        <div class="item branding col-sm-6 col-md-4 col-lg-4 mb-4 ">
                            <Link to="/flyer" class="item-wrap fancybox my-3">
                                {/* <div class="work-info">
                                        <h3 className='fs-3'>Flyer Design</h3>
                                        <span>Click to view full portfolio</span>
                                    </div> */}
                                <img class="logoimg" src={img4} alt="portfolio" />
                            </Link>
                        </div>

                    </div>
                </div>
                {/* </div> */}
            </section>
            <br /><br /><br /><br />
            <section >
                <Footer />
            </section>
        </>
    )
}

export default Portfolio