//firebase 

import {
  Box,
  createTheme,
  Typography,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
//login
import { useState } from "react";
import { useNavigate } from "react-router";
import StartPage from "./StartPage"; 
//theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#006BFF",
      dark: "#0f172a",
      light: "#ffffff",
    },
  },
});

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    //password ,enteredpassword
    //email ,enteredemail
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit() {
    // console.log(user);
    if (user.email === "" || user.password === "") {
      alert("Enter details");
    } else {
      let storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser?.email === user?.email &&
        storedUser?.password == user?.password
      ) {
        alert("login success");
        setUser({ email: "", password: "" });
        navigate("/landingpage");
      } else {
        alert("Invalid password");
      }
    }
  } 

  return (
    <>
       
      <StartPage />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "1110px",
            height: "650px",
            borderRadius: "30px",
            backgroundColor: "#fff",
            display: "flex",
            p: 3,
            gap: 3,
          }}
        >
          {/* left */}
          <Box
            sx={{
              width: "45%",
              height: "100%",
              borderRadius: "30px",
              background: theme.palette.primary.main,
              color: "#fff",
              p: 5,
              boxSizing: "border-box",
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{ fontSize: "45px", fontWeight: 700, lineHeight: 1.2, mt: 4 }}
            >
              Simplify
              <br />
              Management With
              <br />
              Our Dashboard
            </Typography>
            <Box
              sx={{
                mt: 4,
                fontSize: "16px",
                lineHeight: 1.7,
                opacity: 0.9,
                width: "85%",
              }}
            >
              Simplify your E-commerce management with user-freindly admin
              dashboard
            </Box>
          </Box>
          {/* right */}
          <Box
            sx={{
              flex: 1,
              height: "100%",
              borderRadius: "30px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 6,
            }}
          >
            <Box
              sx={{
                mr: 22,
                position: "fixed",
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "#0B5CFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              <ShoppingCartIcon />
            </Box>
            <Typography
              variant="h5"
              sx={{
                mt: 2,
                ml: 9,
                fontSize: "28px",
                fontWeight: 600,
                color: "#111",
              }}
            >
              E-Commerce
            </Typography>
            <Typography
              variant="h5"
              sx={{ mt: 4, fontSize: "35px", fontWeight: 700, color: "#000" }}
            >
              Welcome Back
            </Typography>
            <Box sx={{ mt: 1, fontSize: "15px", color: "#999" }}>
              Please Login to your account
            </Box>
            {/* Email field */}
            <TextField
              name="email"
              value={user.email}
              onChange={handleChange}
              type="email"
              fullWidth
              placeholder="Email Address"
              variant="outlined"
              sx={{
                mt: 6,
                p: 1.5,
                width: "80%",
                backgroundColor: "#f7f7f7",
                borderRadius: "14px",
                border: "none",
                fontSize: "20px",
                fontWeight: 700,
                "& input::placeholder": {
                  fontWeight: "bold",
                  opacity: 1,
                },
                "& fieldset": { border: "none" },
              }}
            />
            {/* Password field */}
            <TextField
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
              fullWidth
              placeholder="Enter Password"
              variant="outlined"
              sx={{
                mt: 2,
                p: 1.5,
                width: "80%",
                backgroundColor: "#f7f7f7",
                borderRadius: "14px",
                border: "none",
                fontSize: "20px",
                fontWeight: 700,
                "& input::placeholder": {
                  fontWeight: "bold",
                  opacity: 1,
                },
                "& fieldset": { border: "none" },
              }}
            />

            {/* login button */}
            <Button
              sx={{
                mt: 4,
                pl: 25,
                pr: 25,
                pt: 2,
                pb: 2,
                borderRadius: "12px",
                color: "#f7f7f7",
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button>
             
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Login;
