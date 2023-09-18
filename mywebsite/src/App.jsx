import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import About from "./sections/about/About"
import Portfolio from "./sections/portfolio/Portfolio"
import PortfolioHome from "./sections/portfolio_home/Portfolio"
import Services from "./sections/services/Services"
import Footer from "./sections/footer/Footer"
import {useRef} from 'react'
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function HomeWrapper() {
  return (
    <div>
      <Header />
      <PortfolioHome />
      <Services />
    </div>
  );
}

const App = () => {
  const mainRef = useRef()
  // console.log(mainRef.current.getBoundingClientRect())
  // const [showFloatingNav, setshowFloatingNav] = useState(true);
  // const [siteYPosition, setsiteYPosition] = useState(0);

  // const showFloatingNavHandler = () => {
  //   setshowFloatingNav(true);
  
  // }
  // const hideFloatingNavHandler = () => {
  //   setshowFloatingNav(false);
  // }

  // check if floating nav should be shown or hidden (depends: whether we scrolled)
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
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main ref={mainRef}>
          <Routes>
            <Route path="/" element={<HomeWrapper />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
        {/* {showFloatingNav && <FloatingNav />} */}
      </div>
    </BrowserRouter>
  )
}

export default App