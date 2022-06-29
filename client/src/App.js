import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  ManageProject,
  ManageRole,
  MyTickets,
  Register,
  UserProfile,
  Home,
  Error,
  ProtectedRoute,
  AddProject,
  SharedLayout,
  SingleProjectPage,
  AddTicket,
} from "./pages/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="role" element={<ManageRole />} />
            <Route path="ticket" element={<MyTickets />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="addproject" element={<AddProject />} />
            <Route path="addticket" element={<AddTicket />} />
            <Route path="project" element={<ManageProject />} />
            <Route path="project/:id" element={<SingleProjectPage />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
