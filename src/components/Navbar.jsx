import UseAuth from "../assets/User/AuthContext";
//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
//useSearch
import UseSearch from "../assets/User/SearchContext";
import { useLocation } from "react-router";
//navbar
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton"; 
import InputBase from "@mui/material/InputBase";
import {Typography} from "@mui/material";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
// Styled components for the Search Bar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.white || "#fff", 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.white || "#fff", 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const settings = ["Profile", "Logout"];
function Navbar() {
    const{ userDeActivate}=UseAuth();
  
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //useSearch
  const { searchText, addSearch, removeSearch } = UseSearch();
  const location = useLocation().pathname;
  // console.log(typeof location);
  // const[search,setSearch]=useState("");
  const navigate = useNavigate();
  const products = useSelector((state) => state.cartslice.products);
  const wishProducts = useSelector((state) => state.wishslice.wishproducts);
  function handleSubmit(e) {
    e.preventDefault();
    if (!searchText.trim()) return;
    //on landingpage only
    if (location === "/landingpage") {
      const values = ["sports", "mobiles", "accessories", "shirts", "laptops"];
      const searchProduct = values.filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase()),
      );

      if (searchProduct.length > 0) {
        navigate(`/${searchProduct[0]}`);
        removeSearch(""); //for next navbar
      } else {
        // alert("Product not found");
        removeSearch("");
        navigate('/pagenotfound')
      }
    }
  }
  function handleLogout() {
    userDeActivate();
    auth.signOut();
    navigate("/landingpage");
  }
  //   console.log(products);
  // console.log(search);
  function handleProfile(setting) {
    if (setting === "Profile") {
      navigate("/profile");
    } else {
      userDeActivate();
      handleLogout();
      
    }
  }
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
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
               p:3,
                position: "fixed",
                width: 30,
                height: 30,
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#0B5CFF",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              <ShoppingCartIcon  /> 
              
            </Box>
            <Box>
              <Typography variant="h5" sx={{color:"black",ml:6,fontFamily:"cursive",fontWeight:"bold"}}>
                Cartify
              </Typography>
              </Box> 

          <Box sx={{ ml: "20em",border:0.2,width:"40em" }}>
            <Search onClick={handleSubmit}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ pr: 40 }}
                placeholder="Search…"
                value={searchText}
                type="text"
                onChange={(e) => addSearch(e.target.value)}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Link to={`/landingpage`}>
              <IconButton>
                <HomeIcon sx={{ color: "black" }} />
              </IconButton>
            </Link>
            <Link to={`/wishlist`}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={wishProducts.length} color="secondary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Link>

            <Link to={`/cart`}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <Badge badgeContent={products.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
            </IconButton>
              </Link>
            <IconButton onClick={handleLogout}>
              <LogoutIcon sx={{ color: "black" }} />
            </IconButton>
 
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user ? (
                    <Box
                      component="img"
                      alt="P"
                      src={user?.photoURL}
                      sx={{
                        height:35,
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <AccountCircle sx={{ color: "black" }} />
                  )}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Button
                      sx={{ textAlign: "center" }}
                      onClick={() => handleProfile(setting)}
                    >
                      {setting}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
