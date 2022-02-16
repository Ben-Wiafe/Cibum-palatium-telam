import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ScrollToTop from "./components/ScrollToTop";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Product from "./components/Product";


function App() {
  return (
    <div>
     {/* <ScrollToTop/> */}
     <Navbar/>
     <Hero/>
     {/* <Hero/>
     <Services/>
     <Portfolio/>
     <Testimonial/>
     <Product/>
     <Newsletter/>
     <Footer/> */}
    </div>
  );
}

export default App;
