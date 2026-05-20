//firebase
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import Navbar from "./Navbar"
import ProductNavbar from "./ProductNavbar"; 
import Home from "./Home";
import { onAuthStateChanged } from "firebase/auth"; 
import Signup from "../Auth/Signup";
function LandingPage(){
    const[currentUser,setCurrentUser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser({
                uid:user.uid,
                email:user.email
            })
            }else{
                setCurrentUser(null);  
            }
        })
    },[]);
    return(
        <>
            {currentUser ? (
                <>
                    <div className="fixed w-full z-50">
                        <Navbar />
                        <ProductNavbar />
                    </div>
                    <div>
                        <div className="py-7"> 
                            <Home />
                        </div>
                    </div>
                </>
            ) : (
                <Signup />
            )}
        </>
    )
}
export default LandingPage;

