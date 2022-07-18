import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Erreur404 from "./pages/Erreur404";
import Liste from "./pages/Liste";
import Shiny from "./pages/Shiny";
import Battle from "./pages/Encounter";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Battle />} />
        <Route path="/liste" element={<Liste />} />
        <Route path="/shinies" element={<Shiny />} />
        <Route path="/about" element={<About />} />
        {/* path="*" fonctionne si l'URL ne coresponds pas à un des routes définies */}
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
