import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./pages/Shared/Navbar/Header";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Home from "./pages/Home/Home/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./pages/Shared/Footer/Footer";

import Blogs from "./pages/Blogs/Blogs";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/Login/RequireAuth/RequireAuth";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutMe />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
