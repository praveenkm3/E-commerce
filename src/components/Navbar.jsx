import { useState } from "react";

function Navbar(){
    const [isOpen,setOpen]=useState(false);
    return( 
        <nav className="bg-black font-bold border-2 ">
            <div className=" h-16 items-center flex justify-between">
                <div className="font-bold text-white px-4 text3xl">E-Cart</div>
            
             {/* desktop */}
                <div className="hidden sm:block space-x-10">
                    <a href="" className="text-gray-300 text-lg px-4 ">Home</a>
                    <a href="" className="text-gray-300 text-lg px-4 ">About</a>
                    <a href="" className="text-gray-300 text-lg px-4 ">Products</a>
                    <a href="" className="text-gray-300 text-lg px-4 ">Cart</a> 
                </div>

                <button onClick={()=>setOpen(!isOpen)} className="block sm:hidden text-gray-400 text-lg px-4">Open</button>
            </div> 

            {/* mobile */}
                <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-100  pb-3 space-y-2`}>
                    <a href="" className="text-gray-400 text-lg px-4 block">Home</a>
                    <a href= "" className="text-gray-400 text-lg px-4 block">About</a>
                    <a href="" className="text-gray-400 text-lg px-4 block">Products</a>
                    <a href="" className="text-gray-400 text-lg px-4 block">Cart</a> 
                </div>
        </nav>  
    )
}
export default Navbar;