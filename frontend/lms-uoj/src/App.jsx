import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Lesson from "./pages/Lesson";
import Assignment from "./pages/Assignment";
import AdminDashboard from "./pages/AdminDashboard";

import AuthLayout from "./Layout/authLayout";
import DashboardLayout from "./Layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>


      {/* Auth Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

      {/* Dashboard Pages */}
      <Route  element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;