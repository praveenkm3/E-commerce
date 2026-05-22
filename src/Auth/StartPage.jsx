import AppBar from "@mui/material/AppBar";

import { Link } from "react-router"; 
//navbar 
import Typography from "@mui/material/Typography";
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
          <Typography variant="h6" noWrap component="div">
            E-Cart
          </Typography>

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

 
