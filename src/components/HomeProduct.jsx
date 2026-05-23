import Card from "@mui/material/Card"; 
import CardContent from "@mui/material/CardContent"; 
import Typography from "@mui/material/Typography";  
import { Box } from "@mui/material";  
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
export default function HomeProduct({ item }) {
  
  return (
    <Card >
      <Box sx={{ position: "relative"}}>
       <CardMedia
          component="img"
          height="140"
          image={item.images[0]}
          alt="green iguana"
          sx={{  bgcolor:"#E8EDF2"}}
        /> 
      </Box>

      <CardContent>
        <Typography gutterBottom noWrap variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography
          variant="p">
          $ {item.price}
        </Typography> 
          <Box>
            <Rating name="size-medium" value={item.rating} readOnly />
          </Box> 
      </CardContent>
      
    </Card>
  );
}
