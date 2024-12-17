/**React JS Imports */
/**React Hooks */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
/**Components */
import NoPage from "./components/NoPage";
import Login from "./apps/accounts/Login";
import ForgotPassword from "./apps/accounts/ForgotPassword";
import Leaves from "./pages/Leaves";
import Attendence from "./pages/Attendence";
import Holiday from "./pages/Holiday";
import Review from "./pages/Review";
import Unauthorized from "./components/Unauthorized";
/**Pages */
import OrganizationLogin from "./pages/organization/OrganizationLogin";
import OrganizationDashboard from "./pages/organization/OrganizationDashboard";
import OrganizationCustomization from "./pages/organization/OrganizationCustomization";
import OrganizationUsers from "./pages/organization/OrganizationUsers";
import Dashboard from "./pages/dashboard/Dashboard";
import Project from "./pages/project/Project";
/**Providers */
import PaginationProvider from "./providers/PagniationProvider";
import AuthProvider from "./providers/AuthProvider";
import LeavesProvider from "./providers/LeavesProvider";
import UserProvider from "./providers/UserProvider";
import DashboardProvider from "./providers/DashboardProvider";
import ReviewProvider from "./providers/ReviewProvider";
import OrganizationProvider from "./providers/OrganizationProvider";
import PreloadProvider from "./providers/PreloadProvider";
import ProjectProvider from "./providers/ProjectProvider";
function App() {
  // const { theme } = useContext(ThemeContext);
  // useEffect(() => {
  //   document.querySelector("body").setAttribute("data-theme", theme);
  // }, [theme]);
  return (
    <BrowserRouter>
      <PreloadProvider>
        <PaginationProvider>
          <UserProvider>
            <AuthProvider>
              <DashboardProvider>
                <ProjectProvider>
                  <OrganizationProvider>
                    <LeavesProvider>
                      <ReviewProvider>
                        <ToastContainer
                          draggablePercent={60}
                          draggable
                          className={"capitalize"}
                          stacked
                        />
                        <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/project" element={<Project />} />
                          <Route path="/login" element={<Login />} />
                          <Route
                            path="/organization/accounts"
                            element={<OrganizationLogin />}
                          />
                          <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                          />
                          <Route
                            path="/organization"
                            element={<OrganizationDashboard />}
                          />
                          <Route
                            path="/organization/customization"
                            element={<OrganizationCustomization />}
                          />
                          <Route
                            path="/organization/users"
                            element={<OrganizationUsers />}
                          />
                          <Route path="/leaves" element={<Leaves />} />
                          <Route path="/attendence" element={<Attendence />} />
                          <Route path="/holidays" element={<Holiday />} />
                          <Route path="/review" element={<Review />} />
                          <Route path="*" element={<NoPage />} />
                          <Route
                            path="/unauthorized"
                            element={<Unauthorized />}
                          />
                        </Routes>
                      </ReviewProvider>
                    </LeavesProvider>
                  </OrganizationProvider>
                </ProjectProvider>
              </DashboardProvider>
            </AuthProvider>
          </UserProvider>
        </PaginationProvider>
      </PreloadProvider>
    </BrowserRouter>
  );
}

export default App;
