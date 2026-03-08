import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

const drawerWidth = 220;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": { width: drawerWidth, background: "#4f46e5", color: "white" },
      }}
    >
      <h2 style={{ padding: "20px" }}>LMS</h2>

      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to="/courses">
          <ListItemIcon>
            <MenuBookIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>

        <ListItem button component={Link} to="/assignment">
          <ListItemIcon>
            <AssignmentIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Assignments" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;