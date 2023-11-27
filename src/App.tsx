import "./App.css";
import { MyContextProvider } from "./MyContext";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import RouterComponent from "./react-router/Router";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <MyContextProvider>
          <Header />
          <RouterComponent />
          <Footer />
        </MyContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
