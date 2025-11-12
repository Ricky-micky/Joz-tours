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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
            <div className="md:w-1/2 p-6"></div>