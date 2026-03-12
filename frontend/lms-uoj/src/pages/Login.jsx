import { Box, Card, Typography, TextField, Button, Checkbox, FormControlLabel, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { signupUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();
  const [openSignup, setOpenSignup] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    regNo: "",
    name: ""
  });

  // Signup form change
  const handleSignupChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async () => {
  try {
    const res = await signupUser({
      name: formData.name,
      regNo: formData.regNo,
      email: formData.email,
      password: formData.password
    });

    alert("Signup Successful");
    setOpenSignup(false);

  } catch (error) {
    console.error(error);
    alert("Signup failed. Please try again.");
  }
};
  const handleForgotPassword = () => {
    alert("Password reset link sent to your email");
  };

  // Login form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // LOGIN FUNCTION (FIXED)
  const handleLogin = async () => {
    try {

      const res = await loginUser({
        email: formData.email,
        password: formData.password
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Email or Password");

    }
  };

  return (

    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg,#6a5af9,#3b82f6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <Card
        sx={{
          width: 380,
          p: 4,
          textAlign: "center",
          borderRadius: 3
        }}
      >

        <SchoolIcon sx={{ fontSize: 40, color: "#4f46e5" }} />

        <Typography variant="h5" sx={{ mt: 1 }}>
          LMS
        </Typography>

        <Typography sx={{ mt: 1, color: "gray" }}>
          Welcome Back!
        </Typography>

        <Typography sx={{ mb: 2, color: "gray" }}>
          Login to your account
        </Typography>

        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />

        <FormControlLabel
          control={<Checkbox />}
          label="Remember Me"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            background: "#3b82f6"
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <span
          onClick={handleForgotPassword}
          style={{ color: "#3b82f6", cursor: "pointer", display: "block", marginTop: 10 }}
        >
          Forgot Password?
        </span>

        <Typography sx={{ mt: 1, fontSize: 14 }}>
          Don't have an account?

          <span
            onClick={() => setOpenSignup(true)}
            style={{ color: "#3b82f6", cursor: "pointer", marginLeft: 5 }}
          >
            Sign Up
          </span>

        </Typography>

      </Card>

      {/* SIGNUP DIALOG */}

      <Dialog open={openSignup} onClose={() => setOpenSignup(false)}>

        <DialogTitle>Student Sign Up</DialogTitle>

        <DialogContent>

          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            onChange={handleSignupChange}
          />

          <TextField
            label="Registration Number"
            name="regNo"
            fullWidth
            margin="normal"
            onChange={handleSignupChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            onChange={handleSignupChange}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            onChange={handleSignupChange}
          />

        </DialogContent>

        <DialogActions>

          <Button onClick={() => setOpenSignup(false)}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSignup}
          >
            Submit
          </Button>

        </DialogActions>

      </Dialog>

    </Box>

  );
}

export default Login;