import "./App.css";
import Home from "./pages/Home";
import NavBar from "./Component/NavBar";
import Routing from "./poc/Routing";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About";
import { ThemeContext } from "@emotion/react";
import ThemeManager from "./poc/Theme/ThemeManager";
import NormalUseState from "./poc/NormalUseState";
import UserReducer from "./poc/UserReducer";
import PaginationContext from "./context/PaginationContext";

function App() {
  return (
    <>
      {/* <Home></Home> */}
      {/* <Routing></Routing> */}
      <NavBar></NavBar>
      <PaginationContext>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>

          <Route path="/products" element={<Product></Product>}></Route>

          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </PaginationContext>
      {/* <ThemeManager></ThemeManager> */}
      {/* <NormalUseState></NormalUseState> */}
      {/* <UserReducer></UserReducer> */}
    </>
  );
}

export default App;
