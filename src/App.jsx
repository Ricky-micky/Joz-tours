import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Safaris from "./Pages/Safaris";
import Amboseli from "./Parks/Amboseli";
import Maasaimara from "./Parks/Maasaimara";
import Nakuru from "./Parks/Nakuru";
import Tsavowest from "./Parks/Tsavowest";
import TsavoEast from "./Parks/Tsavoeast";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Accommodation from "./Pages/Accommodation";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/safaris" element={<Safaris />} />
            <Route path="/amboseli" element={<Amboseli />} />
            <Route path="/tsavoeast" element={<TsavoEast />} />
            <Route path="/tsavowest" element={<Tsavowest />} />
            <Route path="/masaimara" element={<Maasaimara />} />
            <Route path="/Nakurupark" element={<Nakuru />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact"element={<Contact />} />
            <Route path="/accommodation" element={<Accommodation />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
            <div className="md:w-1/2 p-6"></div>