import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Housing from "./pages/housing/housing";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Error from "./pages/error/error";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />

        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        {<Route path="*" element={<Error />} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
