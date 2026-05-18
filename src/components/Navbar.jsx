import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
//useSearch
import UseSearch from "../assets/User/SearchContext";
import { useLocation } from "react-router";

function Navbar(){
    //useSearch
    const{searchText,addSearch,removeSearch}=UseSearch();
    const [isOpen,setOpen]=useState(false);
    const location=useLocation().pathname;
    // console.log(typeof location);
    // const[search,setSearch]=useState("");
    const navigate=useNavigate();
      const products = useSelector((state) => state.cartslice.products);
      const wishProducts=useSelector((state)=>state.wishslice.wishproducts); 
    function handleSubmit(e){ 
        e.preventDefault();
        if (!searchText.trim()) return;
        //on landingpage only
        if(location==="/landingpage"){
            const values = ["sports", "mobiles", "accessories", "shirts", "laptops"]; 
            const searchProduct = values.filter((item) => 
                item.toLowerCase().includes(searchText.toLowerCase())
            );

            if (searchProduct.length > 0) {
                navigate(`/${searchProduct[0]}`);
                removeSearch("");//for next navbar
            }else{
                alert("Product not found");
            }
        }
    }
    //   console.log(products);
    // console.log(search);
    return( 
        <nav className="bg-black border-2 rounded-t-2xl">
            <div className=" h-16 items-center flex justify-between">
                <div className="font-bold text-white px-4 text3xl">E-Cart</div>
                <form onSubmit={handleSubmit}>
                    <div className="relative"> 
                    <input 
                    value={searchText}
                    type="text" 
                    className="bg-amber-50 py-2 px-8 text-black font-serif text-shadow-md rounded-md" 
                    placeholder="Search for products"
                    onChange={(e)=>addSearch(e.target.value)}/>
                     <div className="absolute top-0 ml-50 mt-0.5 text-2xl w-full">
                        <button type="submit" className="cursor-pointer">🔍</button>
                     </div>
                </div>
                </form>
                
            
             {/* desktop */}
                <div className="hidden sm:block space-x-10 font-bold">
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