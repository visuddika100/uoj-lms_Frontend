import { Box, TextField, Button, Typography, Card } from "@mui/material";

function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6fb",
      }}
    >
      <Card sx={{ p: 4, width: 300 }}>
        <Typography variant="h5">Login</Typography>

        <TextField label="Email" fullWidth margin="normal" />

        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </Card>
    </Box>
  );
}

export default Login;