import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EventosPage from "./pages/EventosPage/EventosPage";
import HomePage from "./pages/HomePage/HomePage";
import TipoEventos from "./pages/TipoEventosPage/TipoEventosPage";
import Login from "./pages/LoginPage/LoginPage";
import Teste from "./pages/TestePage/TestePage";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<HomePage />} path={"/"} exact />
        <Route element={<TipoEventos />} path={"/tipo-eventos"} />
        <Route element={<EventosPage />} path={"/eventos"} />
        <Route element={<Login />} path={"/login"} />
        <Route element={<Teste />} path={"/teste"} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;
