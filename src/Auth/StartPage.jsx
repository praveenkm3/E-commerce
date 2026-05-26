import AppBar from "@mui/material/AppBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router"; 
//navbar  
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton"; 
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button, 
}));
function StartPage() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(25, 118, 210, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          color: "black",
        }}
      >
        <Toolbar> 
            <Box
              sx={{
               top:0, 
               mt:1,
                position: "fixed",
                width: 50,
                height: 50,
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

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Link to={'/login'}>
            <IconButton  >
              <Div sx={{p:1.5,color:"black"}}>Sign In</Div>
            </IconButton>
            </Link>
            <Link to={'/signup'}>
            <IconButton  >
              <Div sx={{p:1.5,color:"black"}}>Sign Up</Div>
            </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default StartPage;

 
