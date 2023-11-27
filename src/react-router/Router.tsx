import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Message from "../pages/Message";
import Contact from "../pages/Contact";
import List from "../pages/List";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/message" element={<Message />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
    </Routes>
  );
};

export default Router;
