/**React JS Imports */
/**React Hooks */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
/**Components */
import NoPage from "./pages/NoPage";
import Login from "./apps/accounts/Login";
import ForgotPassword from "./apps/accounts/ForgotPassword";
import Review from "./apps/review/Review";
import Unauthorized from "./pages/Unauthorized";
import AccountVerification from "./apps/accounts/AccountVerification";
/**Apps */
import OrganizationAccounts from "./apps/organization/OrganizationAccounts";
import OrganizationDashboard from "./apps/organization/OrganizationDashboard";
import OrganizationCustomization from "./apps/organization/OrganizationCustomization";
import OrganizationUsers from "./apps/organization/OrganizationUsers";
import Dashboard from "./apps/dashboard/Dashboard";
import Project from "./apps/project/Project";
import Attendence from "./apps/attendence/Attendence";
import Holiday from "./apps/holiday/Holiday";
import Leaves from "./apps/leave/Leaves";
import Resignation from "./apps/resignation/Resignation";
import Broadcast from "./apps/broadcast/Broadcast";
import Device from "./apps/device/Device";

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
import ResignationProvider from "./providers/ResignationProvider";
import Profile from "./apps/accounts/Profile";
import ThemeProvider from "./providers/ThemeProvider";
import DeviceProvider from "./providers/DeviceProvider";
import BroadcastProvider from "./providers/BroadcastProvider";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <PreloadProvider>
          <PaginationProvider>
            <AuthProvider>
              <UserProvider>
                <DashboardProvider>
                  <ProjectProvider>
                    <OrganizationProvider>
                      <LeavesProvider>
                        <ReviewProvider>
                          <DeviceProvider>
                            <BroadcastProvider>
                              <ResignationProvider>
                                <ToastContainer
                                  draggablePercent={60}
                                  draggable
                                  className={"capitalize"}
                                  stacked
                                />
                                <Routes>
                                  <Route path="/" element={<Dashboard />} />
                                  <Route
                                    path="/project"
                                    element={<Project />}
                                  />
                                  <Route path="/login" element={<Login />} />
                                  <Route
                                    path="/profile"
                                    element={<Profile />}
                                  />
                                  <Route
                                    path="/organization/accounts"
                                    element={<OrganizationAccounts />}
                                  />
                                  <Route
                                    path="/verify-account"
                                    element={<AccountVerification />}
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
                                  <Route
                                    path="/attendence"
                                    element={<Attendence />}
                                  />
                                  <Route
                                    path="/holidays"
                                    element={<Holiday />}
                                  />
                                  <Route path="/review" element={<Review />} />
                                  <Route
                                    path="/resignation"
                                    element={<Resignation />}
                                  />
                                  <Route path="/device" element={<Device />} />
                                  <Route
                                    path="/broadcast"
                                    element={<Broadcast />}
                                  />
                                  <Route path="*" element={<NoPage />} />
                                  <Route
                                    path="/unauthorized"
                                    element={<Unauthorized />}
                                  />
                                </Routes>
                              </ResignationProvider>
                            </BroadcastProvider>
                          </DeviceProvider>
                        </ReviewProvider>
                      </LeavesProvider>
                    </OrganizationProvider>
                  </ProjectProvider>
                </DashboardProvider>
              </UserProvider>
            </AuthProvider>
          </PaginationProvider>
        </PreloadProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
