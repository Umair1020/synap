import "./Portfolio.css"
// import { useMediaQuery } from 'react-responsive'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import "./Portfolio.css"
import img1 from "./logo-img/portfolio1.jpg"
import img2 from "./logo-img/portfolio2.jpg"
import img3 from "./logo-img/portfolio3.jpg"
import img4 from "./logo-img/portfolio4.jpg"
import img5 from "./logo-img/portfolio5.jpg"
import { Link } from "react-router-dom"
import { FaArrowAltCircleLeft } from "react-icons/fa"

const Logo = () => {
  return (
    <>
      <section id="portfolio" className="portfolio" >
        <Header />
       
          <div className="row portfolio-container">
            <h1 className='porth1 text-center '>
              <Link className="back btn btn-warning float-start" to="/portfolio" role="button" > <i className="far fa-arrow-alt-circle-left"></i></Link>
              Logo Design Portfolio
            </h1>

            <div id="portfolio-grid" className="row no-gutter mt-5" >


              <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
                <a className="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal1">
                  <img className="logoimg" src={img1} alt="portfolio" />
                </a>
              </div>

              <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
                <a className="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal2">
                  <img className="logoimg" src={img2} alt="portfolio" />
                </a>
              </div>
              <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
                <a className="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal3">
                  <img className="logoimg" src={img3} alt="portfolio" />
                </a>
              </div>

              <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
                <a className="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal4">
                  <img className="logoimg" src={img4} alt="portfolio" />
                </a>
              </div>

              <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
                <a className="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal5">

                  <img className="logoimg" src={img5} alt="portfolio" />
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
              <i className="far fa-arrow-alt-circle-left"></i>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-sm-12">
                  <div className="modal-body">
                    <img className="modelimg d-block" src={img1} alt="..." />
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
              <i className="far fa-arrow-alt-circle-left"></i>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="modal-body">
                    <img className="modelimg d-block " src={img2} alt="..." />
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
              <i className="far fa-arrow-alt-circle-left"></i>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="modal-body">
                    <img className="modelimg d-block " src={img3} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="left" data-bs-dismiss="modal">
              <i className="far fa-arrow-alt-circle-left "></i>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="modal-body">
                    <img className="modelimg d-block " src={img4} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="left" data-bs-dismiss="modal">
              <i className="far fa-arrow-alt-circle-left"></i>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="modal-body">
                    <img className="modelimg d-block " src={img5} alt="..." />
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

export default Logo