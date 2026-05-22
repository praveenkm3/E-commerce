import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import EmptyShow from "./EmptyShow";
import {
  removeProduct,
  addProduct,
  decreaseQuantity,
} from "../../slices/CartSlice"; 
export default function Cart() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cartslice.products);
    // console.log(products);
  function totalPrice(products){
    let tot=0;
    for(let ele of products){
        if(ele.quantity>=1){
            tot += (Number(ele.price) || 0) * (ele.quantity || 0);
        }else{
            tot+=Number(ele.price);
        }
        
    }
    return tot;
  }
  return (
    <>
      <div className="mt-20 ">

      <Navbar />
      </div> 
      {products.length > 0 ? (
        <div className="grid grid-cols-2">

        
        <div className="w-2xl p-6 bg-white rounded-xl shadow-sm  mt-10">
          <div>
            {products.map((item, index) => {
              return (
                <div
                  className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100 items-center mt-2"
                  key={index}
                >
                  <div className="w-100 h-70  bg-white p-2 rounded-md ">
                    <img src={item.images[0]} alt="img not found" />
                  </div>

                  <div className=" min-w-0">
                    <h3 className="text-base font-semibold text-slate-800 ">
                      {item.title}
                    </h3>
                    <li className="text-sm text-slate-500 mt-1">
                      {item.returnPolicy}
                    </li>
                    <li className="text-sm text-slate-500">
                      {item.shippingInformation}
                    </li>
                    <h3 className="text-base font-semibold text-slate-800 truncate mt-5">
                      ${item.price}
                    </h3>

                    <div className="">
                      <button
                        className="bg-red-500 ml-45 px-5 py-2 rounded-sm text-white"
                        onClick={() => dispatch(removeProduct(item))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-bold text-2xl gap-1 flex pe-5 mr-6">
                    <button
                      className="cursor-pointer "
                      onClick={() => dispatch(decreaseQuantity(item))}
                    >
                      ➖
                    </button>
                    <span className="font-normal px-3">{item?.quantity}</span>
                    <button
                      className="cursor-pointer "
                      onClick={() => dispatch(addProduct(item))}
                    >
                      ➕
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
        <div className="max-w-full mt-15">
            <div className="flex justify-center font-extrabold text-3xl">
                <h1>Order Summary</h1>
            </div>
            <div className="flex justify-center mt-5">
                <h1 className="text-2xl">Total Price ${totalPrice(products)}</h1>
            </div>
        </div>
        </div>

        
      ) : ( 
          <div className="ml-15">
            <EmptyShow/> 
          </div>
      )}
    </>
  );
}
