import { Button, Typography } from "@mui/material";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router";
function EmptyShow() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", 
        position: "fixed",
      }}
    >
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Box sx={{ height: 1110, width: 600}}>
        <Typography variant="h5" sx={{ mt: 3, ml:10,fontWeight: "bold" }}>
          You have not added
        </Typography>
        <Typography variant="h5" sx={{ ml:14, fontWeight: "bold" }}>
          any items yet
        </Typography>
        <Box sx={{ml:10}}>
          <Link to={`/landingpage`}>
            <Button
              sx={{
                mt: 3,
                bgcolor: "#F3BE7A",
                color: "black",
              }}
              variant="contained"
            >
              Continue Shopping
            </Button>
          </Link>
        </Box>
        <Stack>
          <Box
            component="img"
            src="/image.png"
            sx={{
              boxShadow: 3,
              p: 4,
              ml:3,
              bgcolor: "background.paper",
              width: "20rem",
              mt:3,
              borderRadius: "12px",
            }}
          >

          </Box>
        </Stack>
      </Box>
    </Box>
      </Box>
  );
}
export default EmptyShow;
