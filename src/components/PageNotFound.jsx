// import Navbar from "./Navbar"; 
import {Box,Typography} from "@mui/material"
function PageNotFound(){
    return(
        <> 
        <Box component="section" sx={{mt:20, border: '1px dotted grey',display:"flex",flexDirection:"row",gap:10 }}>
            <Typography variant="h3" sx={{fontWeight:"bold"}}>
            404
            </Typography>
            <Typography variant="h5" sx={{mt:1.2}}>
                Page is not Found
            </Typography>
        </Box>
        </>
    )
}
export default PageNotFound;