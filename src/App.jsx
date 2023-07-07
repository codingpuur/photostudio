import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'; 

import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer';
import ImagesPage from './component/ImagesPage';
import Kids from './pages/Kids';
import Admin from './component/admin/Admin';
import NotFound from './component/NotFound';
import Uplode from './component/admin/Uplode';
import RandomImage from './component/RandomImage';
// import "./App.css"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
    
    <BrowserRouter>
      <div className="flex flex-col justify-between min-h-screen">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className=' min-h-screen'>
          <Routes>
          <Route path="/admin" element={isLoggedIn ? <Admin /> : <Home />} />
          <Route path="/admin/uplode" element={ <Uplode />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/gallery" element={<RandomImage category="gallery" />} />
            <Route path="/maternity" element={<RandomImage category="maternity" />} />
            <Route path="/kids" element={<RandomImage category="kids" />} />

            <Route path="/:categoryName" element={<Kids />} />
            <Route path="/:categoryName/:name" element={<ImagesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <div className="mt-4">
          <Footer />
        </div>
        <a
          href="https://wa.me/9718510001"
          className="whatsapp_float fixed right-10 bottom-10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon text-3xl text-white bg-green-400 rounded-full h-12 w-12 text-center flex items-center justify-center"></i>
        </a>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
