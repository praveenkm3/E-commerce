import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { Box,Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
function UserProfile() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
  });
  },[])

  return (
    <>
      <Navbar/>
      {user && (
        <Box sx={{ position: "relative",mt:20 }}>
          <Box
            sx={{ 
              
              height: 140,
              width: "50wh",
              bgcolor: "#09637E",
              mx:1
            }}>
            <Box
              component="img"
              src={user.photoURL}
              sx={{
                  mt:3,
                  ml:10,
                position: "absolute",
                borderRadius: "50%", 
              }}/>
              <Typography variant="h5" sx={{ml:30,pt:7,color:"white",fontWeight:"bold"}}>
                {user.email}
              </Typography>

          </Box>
          
        </Box>
      )}
    </>
  );
}
export default UserProfile;
