import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./pages/Shared/Navbar/Navbar";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Home from "./pages/Home/Home/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
