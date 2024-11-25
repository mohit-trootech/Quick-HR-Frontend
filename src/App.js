import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import ThemeProvider from "./providers/ThemeProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <ToastContainer
          draggablePercent={60}
          draggable
          className={"capitalize"}
          stacked
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
