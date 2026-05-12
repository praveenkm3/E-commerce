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
        <Home/>
        </>
    )
}
export default LandingPage;

