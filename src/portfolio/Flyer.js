import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import img1 from "./Flyer/flyer1.jpg"
import img2 from "./Flyer/flyer2.jpg"
import img3 from "./Flyer/flyer3.jpg"
import img4 from "./Flyer/flyer4.jpg"
import img5 from "./Flyer/flyer5.jpg"
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa"

const Flyer = () => {
  return (
    <>
    
      <section class="page-section ">
      
          <div class="mains text-center">
            <h2 class="text-dark fw-bold" >
              <Link className="back btn btn-warning float-start" to="/portfolio" role="button" > <i className="far fa-arrow-alt-circle-left"></i></Link>
              Flyer Design Portfolio</h2>

          </div><br /><br />
          <div class="row " >

            <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
              <a class="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal1">

                <img class="logoimg" src={img1} alt="portfolio" />
              </a>
            </div>

            <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
              <a class="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal2">

                <img class="logoimg" src={img2} alt="portfolio" />
              </a>
            </div>

            <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
              <a class="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal3">

                <img class="logoimg" src={img3} alt="portfolio" />
              </a>
            </div>

            <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
              <a class="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal4">

                <img class="logoimg" src={img4} alt="portfolio" />
              </a>
            </div>

            <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4 ">
              <a class="item-wrap fancybox" data-bs-toggle="modal" href="#portfolioModal5">

                <img class="logoimg" src={img5} alt="portfolio" />
              </a>
            </div>

          </div>
     
      </section>

      <br /><br /><br /><br />
      <section >
        <Footer />
      </section>

      <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="left" data-bs-dismiss="modal">
                <i class="far fa-arrow-alt-circle-left  fixed-top arrow"></i>
            </div>

            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-12 col-sm-12">
                  <div class="modal-body">
                    <img class="modelimg d-block" src={img1} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="left" data-bs-dismiss="modal">

              <i class="far fa-arrow-alt-circle-left  fixed-top arrow"></i>

            </div>

            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="modal-body">
                    <img class="modelimg d-block " src={img2} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="left" data-bs-dismiss="modal">

              <i class="far fa-arrow-alt-circle-left   fixed-top arrow"></i>

            </div>

            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="modal-body">
                    <img class="modelimg d-block " src={img3} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="left" data-bs-dismiss="modal">

              <i class="far fa-arrow-alt-circle-left  fixed-top arrow"></i>

            </div>

            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="modal-body">
                    <img class="modelimg d-block " src={img4} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="left" data-bs-dismiss="modal">
              <i class="far fa-arrow-alt-circle-left  fixed-top arrow"></i>
            </div>

            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="modal-body">
                    <img class="modelimg d-block " src={img5} alt="..." />
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

export default Flyer