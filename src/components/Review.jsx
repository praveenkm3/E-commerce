import { Paper, Typography, Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip';
export default function Review({ product }) {
  return (
    <>
      {product.reviews.map((item) => {
        return (
          <Paper elevation={10} sx={{ p: 3, mt: 3, py: 3 }} key={item}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
              <Tooltip title={item.reviewerEmail}>
                <Avatar sx={{ bgcolor: "#B5BAFF" }}>
                {item.reviewerName[0]}
              </Avatar>
              </Tooltip>

              <Typography variant="p" sx={{ fontWeight: 800, fontSize: 15 }}>
                {item.reviewerName}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}
            >
              <h1>{item.date.slice(0, 10)}</h1>
              <h1>{item.comment}</h1>
              
              <Rating
                name="text-feedback"
                value={item.rating}
                readOnly
                precision={item.rating}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>
          </Paper>
        );
      })}
    </>
  );
}
