import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import img1 from "./socialmedia-img/social.jpg"
import img2 from "./socialmedia-img/social1.jpg"
import img3 from "./socialmedia-img/social2.jpg"
import img4 from "./socialmedia-img/social21.jpeg"
import img5 from "./socialmedia-img/social3.jpg"
import img6 from "./socialmedia-img/social31.jpeg"
import { Link } from 'react-router-dom'

const Socialmedia = () => {

    return (
        <>
  
            <section className="page-section portfolio">
                
                    <div className="mains text-center">
                        <Link className="back btn btn-warning float-start" to="/portfolio" role="button" > <i className="far fa-arrow-alt-circle-left"></i></Link>
                        <h2 className="webh2 text-dark fw-bold" >

                            Social Media Campaign Portfolio</h2>

                    </div><br /><br />
                    <div className="row ">

                        <div id="portfolio-grid" className="row no-gutter" >
                            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
                                <a className="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal1">
                                    <img className="logoimg " src={img1} alt="portfolio" />
                                </a>
                            </div>

                            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
                                <a className="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal2">
                                    <img className="logoimg" src={img4} alt="portfolio" />
                                </a>
                            </div>
                            <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
                                <a className="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal3">
                                    <img className="logoimg" src={img6} alt="portfolio" />
                                </a>
                            </div>


                        </div>
                 
                </div>
            </section>

            <br /><br /><br /><br />
            <section >
                <Footer />
            </section>

            <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="left" data-bs-dismiss="modal">
                            <i className="far fa-arrow-alt-circle-left fixed-top arrow"></i>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="modal-body">
                                        <img className="modelimg d-block" src={img2} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="left" data-bs-dismiss="modal">
                            <i className="far fa-arrow-alt-circle-left fixed-top arrow"></i>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="modal-body">
                                        <img className="modelimg d-block" src={img3} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="left" data-bs-dismiss="modal">
                            <i className="far fa-arrow-alt-circle-left fixed-top arrow"></i>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center d-inline">
                                <div className="col-lg-12 col-sm-12">
                                    <div className="modal-body">
                                        <img className="modelimg d-block" src={img5} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Socialmedia