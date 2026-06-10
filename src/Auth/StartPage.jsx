import AppBar from "@mui/material/AppBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router";
//navbar
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
}));
function StartPage() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          color: "black",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              top: 0,
              mt: 1,
              p: 3,
              position: "fixed",
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#003365",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            <ShoppingCartIcon />
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "black",
                ml: 6,
                fontFamily: "cursive",
                fontWeight: "bold",
              }}
            >
              Cartify
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Link to={"/login"}>
              <IconButton>
                <Div sx={{ p: 1.5, color: "black" }}>Sign In</Div>
              </IconButton>
            </Link>
            <Link to={"/signup"}>
              <IconButton>
                <Div sx={{ p: 1.5, color: "black" }}>Sign Up</Div>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default StartPage;
