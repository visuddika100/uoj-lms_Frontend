import { Box, Card, Typography, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { loginUser } from "../services/authService";
import AuthLayout from "../Layout/authLayout";

function Login() {

  const navigate = useNavigate();
  const [openSignup, setOpenSignup] = useState(false);



  const [formData, setFormData] = useState({
    email: "",
    password: "",
    regNo: ""
  });

  const handleChange = (e) => {
    setFormData,setOpenSignup({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {

    try {

      const res = await loginUser(formData);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Email or Password");

    }

  };

    const handleSignup = () => {
        console.log(signupData);
        alert("Signup Request Sent");

        setOpenSignup(false);
    };

  return (
  <Box sx={{display: "flex"}}>
      <AuthLayout />
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
          onChange={handleChange}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
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

        <Typography sx={{ mt: 2, fontSize: 14 }}>
          Forgot Password?
        </Typography>

        <Typography sx={{ mt: 1, fontSize: 14 }}>
          Don't have an account? 
          
         <span
            onClick={() => setFormData({ ...formData, isSignup: true })}
            style={{ color: "#3b82f6", cursor: "pointer", marginLeft: 5 }}
        >
          Sign Up
        </span>
        </Typography>

      </Card>

    </Box>
      <Dialog open={openSignup} onClose={() => setOpenSignup(false)}>

        <DialogTitle>Student Sign Up</DialogTitle>

          <DialogContent>

            <TextField
              label="Full Name"
              name="name"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />

            <TextField
              label="Registration Number"
              name="regNo"
              fullWidth
              margin="normal"
              onChange={handleChange}
            />

            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              onChange={handleChange}
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