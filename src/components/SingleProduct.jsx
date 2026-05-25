import { useLocation } from "react-router";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star"; 
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addProduct } from "../slices/CartSlice";
const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
export default function QuiltedImageList() {
    const dispatch=useDispatch();
  function addCartSubmit(){
    dispatch(addProduct(currentProduct));
  }
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const location = useLocation();

  const currentProduct = location.state?.product;
  console.log(currentProduct);
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
      <CssBaseline />
      <Paper
        elevation={10}
        sx={{ minHeight: "100vh", bgcolor: "#whitesmoke", pl: 10, pt: 10 }}
      >
        <Box sx={{ display: "flex", gap: 10 }}>
          <Grid
            container
            spacing={2}
            columns={12}
            sx={{ width: 500, height: 500 }}
          >
            {currentProduct.images.map((img, index) => (
              <Grid key={index} size={index === 0 ? 12 : 4}>
                <Item sx={{ bgcolor: "#E8EDF2" }}>
                  <img src={img} alt="" />
                </Item>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              width: 600,
              height: 671,
              display: "flex",
              gap: 0.5,
              flexDirection: "column",
              alignItems: "center",
              
            }}
          >
            <Div sx={{ fontSize: 34, fontWeight: "bold" }}>
              {currentProduct.title}
            </Div>
            <Box
              sx={{ 
                pr: 40,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="p" sx={{fontWeight:600,fontSize:20}}>
                Price : $ {currentProduct.price}
              </Typography>
              <Box
                sx={{
                  
                }}
              >
                <Typography variant="h5" sx={{fontWeight:600,fontSize:20}}>Product Description </Typography>
                <Typography align="justify" sx={{mt:2}}>
                  {currentProduct.description}
                </Typography>
              </Box>
              <Box
                sx={{
                   
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Typography variant="p" sx={{fontWeight:600,fontSize:20}}>Rating </Typography>
                <Rating
                  name="text-feedback"
                  value={currentProduct.rating}
                  readOnly
                  precision={currentProduct.rating}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                /> 
                <Box sx={{ ml: 2 }}>{labels[currentProduct.rating]}</Box>
              </Box>
              
              <List
                sx={{
                  maxWidth: "448px",  
                  listStyleType: "disc",  
                  pl: 3, 
                  "& .MuiListItem-root": {
                    display: "list-item",  
                    p: 0, 
                    mb: 0.5,  
                    typography: "body1",  
                  },
                }}
              >
                <ListItem>{currentProduct.warrantyInformation}</ListItem>
                <ListItem>{currentProduct.shippingInformation}</ListItem>
                <ListItem>{currentProduct.availabilityStatus}</ListItem>
                <ListItem>Weight: {currentProduct.weight}00 gms</ListItem>
              </List>
              <Button sx={{ bgcolor: "black",color:"white" }} onClick={addCartSubmit}>Add to Cart</Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
 