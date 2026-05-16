import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
function Navbar(){
    const [isOpen,setOpen]=useState(false);
      const products = useSelector((state) => state.cartslice.products);
      const wishProducts=useSelector((state)=>state.wishslice.wishproducts);
    //   console.log(products);
    return( 
        <nav className="bg-black font-bold border-2 rounded-t-2xl">
            <div className=" h-16 items-center flex justify-between">
                <div className="font-bold text-white px-4 text3xl">E-Cart</div>
            
             {/* desktop */}
                <div className="hidden sm:block space-x-10">
                    <Link to={`/landingpage`} className="text-gray-300 text-lg px-4 ">Home</Link>
                    <Link to={`/wishlist`} className="text-gray-300 text-lg px-4 ">Wish List<span className="text-orange-700 space-y-5 mb-6">{wishProducts.length}</span></Link>
                    <Link to={`/`} className="text-gray-300 text-lg px-4 ">Log Out</Link> 
                    <Link to={`/cart`} className="text-gray-300 text-lg px-4 ">Cart<span className="text-orange-700 space-y-5 mb-6">{products.length>0 ? products.length : 0}</span></Link>

                </div>

                <button onClick={()=>setOpen(!isOpen)} className="block sm:hidden text-gray-400 text-lg px-4">Open</button>
            </div> 

            {/* mobile */}
                <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-100  pb-3 space-y-2`}>
                    <Link  to={`/landingpage`} className="text-gray-400 text-lg px-4 block">Home</Link>
                    <a href= "" className="text-gray-400 text-lg px-4 block">About</a>
                    <a href="" className="text-gray-400 text-lg px-4 block">Products</a>
                    <a href="" className="text-gray-400 text-lg px-4 block">Cart</a> 
                </div>
        </nav>  
    )
}

export default Navbar;