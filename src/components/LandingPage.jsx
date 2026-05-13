import Navbar from "./Navbar"
import ProductNavbar from "./ProductNavbar"; 
import Home from "./Home";

function LandingPage(){
    return(
        <> 
        <div className="fixed w-full z-50">
            <Navbar/>
            <ProductNavbar/>
        </div>
        <div>
            <div className="py-7"> 
                <Home/>
            </div>
             
        </div>
        </>
    )
}
export default LandingPage;

