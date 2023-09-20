import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import About from "./sections/about/About"
import Portfolio from "./sections/portfolio/Portfolio"
import PortfolioHome from "./sections/portfolio_home/Portfolio"
import Services from "./sections/services/Services"
import Footer from "./sections/footer/Footer"
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useRef, useState, useEffect } from "react"
import FloatingNav from "./sections/floating-nav/FloatingNav"
import './index.css'

export default function App() {

  function HomeWrapper() {
    console.log("success")
    return (
      <div>
        <Header />
        <PortfolioHome />
        <Services />
      </div>
    );
  }
  // const mainRef = useRef()

  // // console.log(mainRef.current.getBoundingClientRect())
  // const [showFloatingNav, setshowFloatingNav] = useState(true);
  // const [siteYPosition, setsiteYPosition] = useState(0);

  // const showFloatingNavHandler = () => {
  //   setshowFloatingNav(true);
  
  // }
  // const hideFloatingNavHandler = () => {
  //   setshowFloatingNav(false);
  // }

  // // check if floating nav should be shown or hidden (depends: whether we scrolled)
  // const floatingNavToggleHandler = () => {
  //   // check if we scrolled up or down at least 15px
  //   if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 15) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 15)){
  //     showFloatingNavHandler();
  //   }
  //   else{
  //     hideFloatingNavHandler();
  //   }

  //   setsiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  // }

  // useEffect(() => {
  //   const checkYPosition = setInterval(floatingNavToggleHandler,2000);

  //   // cleanup function
  //   return () => clearInterval(checkYPosition);
  // }, [siteYPosition])

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          {/* <main ref={mainRef}> */}
            <Routes>
              <Route path="/gh-pages-url/" element={<HomeWrapper />} />
              <Route path="/gh-pages-url/about" element={<About />} />
              <Route path="/gh-pages-url/portfolio" element={<Portfolio />} />
              <Route path="*" element={<HomeWrapper />} />
            </Routes>
          {/* </main> */}
          <Footer />
          {/* {showFloatingNav && <FloatingNav />} */}
      </BrowserRouter>
    </div>
  );
}