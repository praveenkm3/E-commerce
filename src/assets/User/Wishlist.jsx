import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux"; 
import MediaCard from "../../components/Product"; 
import EmptyShow from "./EmptyShow";

function WishList() {
    let wishListProducts=useSelector((state)=>state.wishslice.wishproducts);
    // console.log(wishListProducts);
 
  return (
    <>
      <div className="mt-10 left-0">
        <Navbar />
      </div> 
      <div className="grid grid-cols-5 gap-10 px-20 py-5">
        {(wishListProducts.length>0 ?
            wishListProducts.map((item,index)=>{
                return( 
                    <MediaCard  item={item} key={index}/>
                )
            }):
             <div className="top-0,left-0">
              <EmptyShow/>
            </div>
            )}

      </div>
    </>
  );
}
export default WishList; 