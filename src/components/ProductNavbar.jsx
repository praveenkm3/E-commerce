import { Link } from "react-router";


function ProductNavbar(){
    return(
        <>
        <nav className="bg-white w-full mt-0.5 px-0.5">
            <div className="flex font-mono px-2 py-2 justify-center gap-20">
                <Link to="/shirts"><button className="cursor-pointer hover:font-bold">Shirts</button></Link>
                <Link to="/sports"><button className="cursor-pointer hover:font-bold">Sports</button></Link>
                <Link to="/mobiles"><button className="cursor-pointer hover:font-bold">Mobiles</button></Link>
                <Link to="/laptops"><button className="cursor-pointer hover:font-bold">Laptops</button></Link>
                <Link to="/accessories"><button className="cursor-pointer hover:font-bold">Accessories</button></Link>
                
            </div>
        </nav>
        
        </>
    )
}
export default ProductNavbar;