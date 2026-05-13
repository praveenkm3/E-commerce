import { Link } from "react-router";


function ProductNavbar(){
    return(
        <>
        <nav className="bg-white w-full mt-0.5 px-0.5">
            <div className="flex font-mono px-2 py-2 justify-center gap-20">
                <Link to="/shirts"><button className="cursor-pointer">Shirts</button></Link>
                <Link to="/sports"><button className="cursor-pointer">Sports</button></Link>
                <Link to="/mobiles"><button className="cursor-pointer">Mobiles</button></Link>
                <Link to="/laptops"><button className="cursor-pointer">Laptops</button></Link>
                <Link to="/accessories"><button className="cursor-pointer">Accessories</button></Link>
                
            </div>
        </nav>
        
        </>
    )
}
export default ProductNavbar;