import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../components/navigation";

const Cats = lazy(() => import("../pages/cats"));
const Pokemon = lazy(() => import("app2/Pokemon"));

const Routers = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Cats />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);
export default Routers;
