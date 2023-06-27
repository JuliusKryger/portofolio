import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;