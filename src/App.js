import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./pages/Shared/Navbar/Header";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Home from "./pages/Home/Home/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Footer from "./pages/Shared/Footer/Footer";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import RequireAuth from "./Login/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
