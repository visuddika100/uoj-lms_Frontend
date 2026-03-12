import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function AuthLayout() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#6a5af9,#3b82f6)"
      }}
    >
      <Outlet />
    </Box>
  );
}

export default AuthLayout;