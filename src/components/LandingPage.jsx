//firebase
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import Navbar from "./Navbar"
import Footer from "./Footer";
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
                        <div>
                            <Navbar />
                        </div>
                        <div className="mt-17 fixed top-0 right-0 w-full mb:40">
                            <ProductNavbar />
                        </div> 
                        <div>
                            <h1>p</h1>
                        <Home /> 
                        <Footer/>
                        </div> 
                </>
            ) : (
                <Signup />
            )}
        </>
    )
}
export default LandingPage;

