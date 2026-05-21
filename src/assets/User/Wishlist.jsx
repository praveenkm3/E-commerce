import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux"; 
import MediaCard from "../../components/Product"; 


function WishList() {
    let wishListProducts=useSelector((state)=>state.wishslice.wishproducts);
    // console.log(wishListProducts);
 
  return (
    <>
      <Navbar />
      <center>
        <h1 className="font-bold text-3xl">Your wishlist</h1>
      </center>
      <div className="grid grid-cols-5 gap-10 px-20 py-5">
        {(wishListProducts ?
            wishListProducts.map((item,index)=>{
                return( 
                    <MediaCard  item={item} key={index}/>
                )
                    
            }):<h1>Empty</h1>)}

      </div>
    </>
  );
}
export default WishList; 