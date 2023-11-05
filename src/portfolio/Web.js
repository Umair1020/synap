import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import img1 from "./webdesign-img/web1.jpg"
import img2 from "./webdesign-img/web2.jpg"
import img3 from "./webdesign-img/web3.jpg"
import img4 from "./webdesign-img/web4.jpg"
import img5 from "./webdesign-img/web6.jpg"
import img6 from "./webdesign-img/web1.png"
import img7 from "./webdesign-img/web2.png"
import img8 from "./webdesign-img/web3.png"
import img9 from "./webdesign-img/web4.png"
import img10 from "./webdesign-img/web5.jpg"
import { Link } from 'react-router-dom'

const Web = () => {
  return (
    <>
      <section className="page-section portfolio">
        <Header />
        <div className="mains text-center">
          <Link className="back btn btn-warning float-start" to="/portfolio" role="button" > <i className="far fa-arrow-alt-circle-left"></i></Link>
          <h2 className="webh2 text-dark fw-bold" >

            Website Design Portfolio</h2>

        </div><br /><br />
        <div className="row ">


          <div id="portfolio-grid" className="row no-gutter" >
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
              <i className="far fa-arrow-alt-circle-left fixed-top arrow"></i>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-sm-12">
                  <div className="modal-body">
                    <img className="modelimg d-block" src={img6} alt="..." />
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
                <div className="col-lg-12">
                  <div className="modal-body">
                    <img className="modelimg d-block " src={img7} alt="..." />
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
              <i className="far fa-arrow-alt-circle-left fixed-top arrow" ></i>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="modal-body">
                    <img className="modelimg d-block " src={img8} alt="..." />
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
              <i className="far fa-arrow-alt-circle-left fixed-top arrow"></i>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="modal-body">
                    <img className="modelimg d-block " src={img9} alt="..." />
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

              <i className="far fa-arrow-alt-circle-left fixed-top arrow" ></i>

            </div>

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="modal-body">
                    <img className="modelimg d-block " src={img10} alt="..." />
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

export default Web