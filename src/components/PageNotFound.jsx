
import { Box, Paper ,Typography} from "@mui/material"; 

function PageNotFound() {
  return (
    <> 
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "1110px",
            height: "650px",
            borderRadius: "30px",
            backgroundColor: "#fff",
            display: "flex",
            p: 3,
            gap: 3,
            background: "linear-gradient(45deg, #004080, #000000)",
            color:"white"
          }}
        >
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",ml:35,gap:20}}>
                <Typography variant="h1" sx={{}}>404</Typography>
                <Typography variant="h3">OOPS! PAGE NOT FOUND</Typography>
                <Typography variant="p">Sorry,the page you are you are looking for doesn't exist .</Typography>
            </Box>


        </Paper>
        </Box>

 
    </>
  );
}
export default PageNotFound;
