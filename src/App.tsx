import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/Form";
import MovingString from "./components/MovingStrip";
import VideoPage from "./components/VideoPage"


function App() {
  return (
    <div className="w-full min-h-screen">
      {/* First Page with Background */}
<div
  className="relative bg-cover bg-center min-h-screen"
  style={{ backgroundImage: "url('/Bg2.png')" }}
>
  {/* Navbar + Hero only */}
  <Navbar />
  <HeroSection />

  {/* Gradient fade divider */}
  <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
</div>
      {/* Second Page (Form Section) */}
      <div id="contact" className="pt-10">
        <ContactForm />
      </div>


<div id="contact" className="pt-4 md:pt-10">
  <MovingString />
</div>

<div id="contact" className="pt-4 md:pt-10">
  <VideoPage />
</div>


      {/* Routes still here for Navbar navigation */}
      <Routes>
       
        <Route path="/prebuilt" element={<h1 className="text-white text-4xl">Prebuilt Page</h1>} />
        <Route path="/customized" element={<h1 className="text-white text-4xl">Customized Page</h1>} />
        <Route path="/aboutUs" element={<h1 className="text-white text-4xl">About Us Page</h1>} />
        <Route path="/contact" element={<h1 className="text-white text-4xl">Contact Us Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
