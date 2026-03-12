import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderBar() {

  const student = {
    name: "Alexander"
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Typography variant="h6">
          Student Dashboard
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography>{student.name}</Typography>

          <IconButton>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>

          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar;