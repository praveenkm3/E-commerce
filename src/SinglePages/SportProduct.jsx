import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

function SportProduct() {
  const [sportsData, setSportsData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((res) => setSportsData(res))
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  const { id } = useParams();
  const matchProduct = sportsData?.products?.find(
    (item) => Number(id) === Number(item.id),
  );
  // console.log(matchProduct);
  return (
    <>
    <Navbar/>
      {matchProduct ? (
        <div className="grid grid-cols-2  h-screen mt-20 ">
          <div className="h-[70dvh] w-3xl pe-5">
            <img
              src={matchProduct.images[0]}
              alt="NotFound"
              className="px-5 h-[50dvh] w-full rounded-base "
            />
          </div>
          <div className=" space-y-5">
            <h2 className="mb-2 text-2xl text-heading text-orange-500  font-serif">
              Product Specifications
            </h2>
            <ul className="max-w-md space-y-1 text-body list-disc list-inside">
              <li> {matchProduct.warrantyInformation}</li>
              <li> {matchProduct.shippingInformation}</li>
              <li>  {matchProduct.availabilityStatus}</li>
              <li>  Weight : {matchProduct.weight}00 gms</li>
            </ul>
            <h2 className="text-2xl py-3 text-orange-400 font-serif ">Price : ${matchProduct.price}</h2>
            <div class="py-4 pe-4 text-2xl w-2xl text-black">
                <p class="select-none w-full text-sm font-medium text-heading">{matchProduct.description}</p>
            </div>
            <button className="bg-yellow-400 py-3 px-5 rounded-2xl">Add to Cart</button>
          </div>
        </div>
      ) : (
        <center>
          <button
            type="button"
            className="inline-flex items-center text-body bg-neutral-primary-soft focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Loading...
          </button>
        </center>
      )}
    </>
  );
}
export default SportProduct;
