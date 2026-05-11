import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Animais from "./pages/Animais/Animais";
import Contato from "./pages/Contato/Contato";
import Depoimentos from "./pages/Depoimentos/Depoimentos";
import NotFound from "./pages/NotFound/NotFound";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/sobre"        element={<Sobre />} />
          <Route path="/animais"      element={<Animais />} />
          <Route path="/contato"      element={<Contato />} />
          <Route path="/depoimentos"  element={<Depoimentos />} />
          <Route path="*"             element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;