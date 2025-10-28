import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/about/About";
import Models from "./components/models/Models";
import Title from "./components/title/Title";
import ModelSwiper from "./components/swiper/Outlets";
import Contact from "./components/contact/Contact";
import Founders from "./components/founders/Founders";
import Clients from "./components/clients/Clients";
import StoreDetails from "./components/storeDetail/StoreDetails";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Models />
      <ModelSwiper />
      <AboutUs />
      <Clients />
      <Founders />
      <Contact />
    </>
  );
};

function App() {
  

  return (
    <Router>
      <div>
        <Header />
        <Routes >
          {/* Main home page route */}
          <Route path="/" element={<HomePage />} />

          {/* Store details page route */}
          <Route path="/store/:storeId" element={<StoreDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
