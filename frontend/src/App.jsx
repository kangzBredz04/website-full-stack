import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import About from "./components/About";
import Catalog from "./components/Catalog";

export default function App() {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <Home />
      <About />
      <Catalog />
      <footer>&copy; 2023 Wabredz Store</footer>
    </>
  );
}
