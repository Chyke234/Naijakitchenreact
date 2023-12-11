import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { NewsLetter } from "./components/NewsLetter";
import { Home } from "./pages/Home";

import { CartItem } from "./pages/Cart-items";
import { Catering } from "./pages/Catering";
import { Contact } from "./pages/Contact";
import { Dishes } from "./pages/Dishes";

import { ShopContextProvider } from "./context/Shop-Context";

function App() {
  return (
  
    <div className="mb-4">
        <ShopContextProvider>
          <Router>
            <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/cart" element={<CartItem />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
          <NewsLetter />
            <Footer />
            </Router>
          </ShopContextProvider>
        </div>
       
    
  );
}

export default App;
