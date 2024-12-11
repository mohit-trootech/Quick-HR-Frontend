/**React JS Imports */
import React from "react";
import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/Contexts";
import NoPage from "./components/NoPage";
import { ToastContainer } from "react-toastify";
import Home from "./Home";
import Login from "./apps/accounts/Login";
import ForgotPassword from "./apps/accounts/ForgotPassword";
import Leaves from "./pages/Leaves";
import Attendence from "./pages/Attendence";
import Holiday from "./pages/Holiday";
import Review from "./pages/Review";
/**Providers */
import LeavesProvider from "./providers/LeavesProvider";
import UserProvider from "./providers/UserProvider";
import DashboardProvider from "./providers/DashboardProvider";
import ReviewProvider from "./providers/ReviewProvider";
function App() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <UserProvider>
        <DashboardProvider>
          <LeavesProvider>
            <ReviewProvider>
              <ToastContainer
                draggablePercent={60}
                draggable
                className={"capitalize"}
                stacked
              />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/leaves" element={<Leaves />} />
                <Route path="/attendence" element={<Attendence />} />
                <Route path="/holidays" element={<Holiday />} />
                <Route path="/review" element={<Review />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
            </ReviewProvider>
          </LeavesProvider>
        </DashboardProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
