import Card from "@mui/material/Card";
import { Badge } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../slices/CartSlice";
import { removeFromWish, addToWish } from "../slices/WishlistSlice";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MediaCard({ item }) {
  let products = useSelector((state) => state.cartslice.products);
  let wishListProducts = useSelector((state) => state.wishslice.wishproducts);
  function getProductQuantity() {
    const match = products.find((product) => {
      // debugger;
      return product.id === item.id;
    });
    return match?.quantity ?? 0;
  }
  const dispatch = useDispatch();
  function addCartSubmit(item) {
    dispatch(addProduct(item));
    // console.log("Product added")
  }
  //removefromwish
  function Unwish(item) {
    dispatch(removeFromWish(item));
  }
  //addtowish
  function WishButton(item) {
    dispatch(addToWish(item));
  }
  const AlreadyWished = wishListProducts.some(
    (wishItem) => wishItem.id === item.id,
  );
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ position: "relative" }}>
        <Carousel axis='horizontal' autoPlay="true" interval="3000">
          {item.images.map((img,index) => {
            return (
                <img src={img}></img>
            //   <CardMedia
            //     sx={{ height: 140, py: 15, bgcolor: "#EEEEEE" }}
            //     image={img}
            //     title={item.title}
            //     key={index}
            //   />
            );
          })}
        </Carousel>

        <Box sx={{ position: "absolute", top: 9, right: 10 }}>
          {AlreadyWished ? (
            <Button onClick={() => Unwish(item)}>
              <FavoriteIcon sx={{ color: "#F73D93" }} />
            </Button>
          ) : (
            <Button onClick={() => WishButton(item)}>
              <FavoriteBorderIcon />
            </Button>
          )}
        </Box>
      </Box>

      <CardContent>
        <Typography gutterBottom noWrap variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            height: "3rem",
            width: "auto",
            overflow: "hidden",
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            addCartSubmit(item);
            getProductQuantity();
          }}
        >
          <Badge badgeContent={getProductQuantity()} color="primary">
            <AddShoppingCartIcon />
          </Badge>
        </Button>
        <Link to={`/sports/${item.id}`}>
          <Button size="small">
            <RemoveRedEyeIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
