import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import About from "./about/index"
import { useEffect } from "react";
import Landingpage from "./landingpage/Landingpage";
import Services from "./services";
import Portfolio from "./portfolio/index";
import Logo from "./portfolio/Logo"
import Flyer from "./portfolio/Flyer"
import Web from "./portfolio/Web"
import Socialmedia from "./portfolio/Socialmedia"


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/socialmedia" element={<Socialmedia />}> </Route>
      <Route path="/web" element={<Web />} />
      <Route path="/flyer" element={<Flyer />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Landingpage />} />
    </Routes>
  );
}
export default App;