import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EventosPage from "./pages//EventosPage/EventosPage";
import HomePage from "./pages/HomePage/HomePage";
import TipoEventos from "./pages/TipoEventosPage/TipoEventosPage";
import Contatos from "./pages/ContatosPage/ContatosPage"
import Login from "./pages/LoginPage/LoginPage"

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path={"/"} exact />
        <Route element={<TipoEventos />} path={"/tipoEventos"} />
        <Route element={<EventosPage />} path={"/eventos"} />
        <Route element={<Contatos />} path={"/contatos"} />
        <Route element={<Login/>} path={"/login"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;