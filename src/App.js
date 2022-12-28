import { Route, Routes  } from "react-router-dom";
import CariMobil from "./components/pages/CariMobil";
import DetailMobil from "./components/pages/DetailMobil";
import FaqSection from "./components/pages/FaqSection";
import FooterSection from "./components/pages/FooterSection";
import HasilCariMobil from "./components/pages/HasilCariMobil";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import OurserSection from "./components/pages/OurserSection";
import TestiSection from "./components/pages/TestiSection";
import WhyUs from "./components/pages/WhyUs";

function App() {

  // const [selected, setSelected] = useState("Masukan Kapasitas Mobil");

  return (
   <>
    
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ourservis" element={<OurserSection/>} />
          <Route path="/whyus" element={<WhyUs/>} />
          <Route path="/testi" element={<TestiSection/>} />
          <Route path="/faq" element={<FaqSection/>} />

          <Route path="/carimobil" element={<CariMobil/>}/>
          <Route path="/hasilmobil" element={<HasilCariMobil/>}/>
          <Route path="/hasilmobil/:id" element={<DetailMobil/>}/>
        </Routes>
        
        <FooterSection/>
   </>
  );
}

export default App;
