import Card from "@mui/material/Card";
import { Badge } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    <Card sx={{ zIndex:0 }}>
      <Box sx={{ position: "relative" }}>
        <Carousel showThumbs={false} axis="horizontal" autoPlay="true" interval="3000" stopOnHover="true" autoFocus="true">
          {item.images.map((img) => {
            return <Box style={{zIndex:-1}} component='img' src={img} loading="lazy"></Box>;
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
        <Box sx={{display:"flex",justifyContent:"space-around",ml:6 }}>
          <Button
            size="small"
            onClick={() => {
              addCartSubmit(item);
              getProductQuantity();
            }}
          >
            <Badge badgeContent={getProductQuantity()} color="secondary">
              <AddShoppingCartIcon />
            </Badge>
          </Button>
          <Link to={`/single`} state={{product :item}}>
            <Button size="small">
              <RemoveRedEyeIcon />
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
}
