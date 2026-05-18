//usesearch
import UseSearch from "../assets/User/SearchContext";


import { Link } from "react-router"; 
//addtocart
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../slices/CartSlice";
//addtowish
import { addToWish } from "../slices/WishlistSlice";
import { removeFromWish } from "../slices/WishlistSlice";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Sports() { 
  //use search
    const{searchText}=UseSearch();
  
  //wishedproducts
  const wishListProducts=useSelector((state)=>state.wishslice.wishproducts)

  
  const [sportsData, setSportsData] = useState(null); 

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((res) =>setSportsData(res))
      .catch((err) => console.log("Error occurs ", err));
  }, []);

  //navbar search
  const filteredProducts = sportsData?.products ? sportsData.products.filter((item) => {
        if (!searchText.trim()) return true; 
  return item.title.toLowerCase().startsWith(searchText.trim().toLowerCase());
}) : [];


  //search for sports
  // console.log(SportTitles);
  // console.log(sportsData.products)
//addtocart
  const dispatch=useDispatch();
  function addCartSubmit(item){
    let matchProduct=sportsData.products.find((product)=>product.id==item.id)
    if(matchProduct){
    dispatch(addProduct(matchProduct));
    }else{
      console.log("Product is not matched")
    }
  }
  //addtowish
  function WishButton(item){  
      let Product2=sportsData.products.find((product)=>product.id==item.id)
          if(Product2){
          dispatch(addToWish(Product2));
          }else{
            console.log("Product is not matched")
          } 
    
  }
  //removefromwish
  function Unwish(item){
     let product2=wishListProducts.find((product)=>product.id===item.id);
        // console.log(product2) 
        dispatch(removeFromWish(product2));
  }
  //usesearch
  
  return (
    
    <> 
    <Navbar/>
     
      {sportsData?.products != undefined ? (
        <div className="grid grid-cols-5 gap-4 px-4 my-5">
          {filteredProducts?.map((item) => {
            const AlreadyWished=wishListProducts.some((wishItem)=>wishItem.id===item.id);
            return (
              <div className=" block max-w-sm p-6 border rounded-2xl" key={item.id}>
                {AlreadyWished ? <button className="flex justify-end bg-amber-200 rounded-2xl ml-40 px-2 cursor-pointer" onClick={()=>{Unwish(item)}}>UnWish</button>
                : <button className="flex justify-end bg-amber-200 rounded-2xl ml-25 px-2 cursor-pointer" onClick={()=>{WishButton(item)}}>Add to Wishlist</button>
            }
                <img className="rounded-base" src={item.images[0]} alt="" />
                <p className="mb-3  tracking-tight text-heading leading-8">
                  {item.title}
                </p>
                <p className="mb-3  tracking-tight text-heading leading-8">
                 Price : ${item.price}
                </p>
                <div className="flex gap-2">
                  <Link to={`/sports/${item.id}`}>
                <button className="border bg-black text-white px-9 py-1 rounded-2xl cursor-pointer">View Item</button>
                </Link> 
                <button className="border bg-orange-500 text-white px-9 py-1 rounded-2xl cursor-pointer" onClick={()=>{addCartSubmit(item)}}>Add Cart</button>
                 
                </div> 
                </div>
            );
          })}
        </div>
      ) : (
        <center>
          <button
            type="button"
            className="inline-flex items-center text-body bg-neutral-primary-soft hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            
            Loading...
          </button>
        </center>
      )}
    </>
  );
}
export default Sports;
