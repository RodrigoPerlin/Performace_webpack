import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Cats = lazy(() => import("../pages/cats"));
const Pokemon = lazy(() => import("app2/Pokemon"));

const Routers = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/cats" element={<Cats />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </Suspense>
  </Router>
);
export default Routers;
