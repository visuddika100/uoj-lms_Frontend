import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import HeaderBar from "../components/HeaderBar";
import { Box } from "@mui/material";

function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      
      {/* Sidebar */}
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>

        {/* Header */}
        <HeaderBar />

        {/* Page Content */}
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>

      </Box>

    </Box>
  );
}

export default DashboardLayout;