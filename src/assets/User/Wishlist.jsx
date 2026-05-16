import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//addtocart
import { addProduct } from "../../slices/CartSlice";
import { removeFromWish } from "../../slices/WishlistSlice";


function WishList() {
    let wishListProducts=useSelector((state)=>state.wishslice.wishproducts);
    // console.log(wishListProducts);

    //addtocart
    const dispatch=useDispatch(); 
      function addCartSubmit(item){
        let product1=wishListProducts.find((product)=>product.id===item.id);
        // console.log(product1) 
        const dummy = structuredClone(product1);

        dispatch(addProduct(dummy));
        // console.log("added")
        dispatch(removeFromWish(product1));
      }
      //removefromwish
      function RemoveWish(item){
        let product2=wishListProducts.find((product)=>product.id===item.id);
        // console.log(product2) 
        dispatch(removeFromWish(product2));
      }
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
                    <div className=" bg-white p-2 rounded-md border-1 " key={index}>
                        <div className="w-30">
                            <h1 className="font-bold">{item.title}</h1>
                            <img src={item.images[0]} alt="img not found" className="ml-13"/>
                        </div>
                        <div className=" pb-6">
                            <h1 className="font-serif font-bold">Price : ${item.price}</h1>
                        </div>
                        <div className="flex justify-evenly">
                            <div>
                                <button className="bg-orange-500 py-1 px-1 rounded-md font-serif" onClick={()=>{addCartSubmit(item)}}>Add to Cart</button>
                            </div>
                            <div>
                                <button className="bg-yellow-200 px-5 py-1 rounded-md" onClick={()=>{RemoveWish(item)}}>Unwish </button>
                            </div>
                        </div>
                    
                    </div> 
                )
            }):<h1>Empty</h1>)}

      </div>
    </>
  );
}
export default WishList;
