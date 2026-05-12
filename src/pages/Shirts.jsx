import { Link } from "react-router";

import { useState, useEffect } from "react";
function Shirts() {
  const [shirtsData, setShirtsData] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((res) => setShirtsData(res))
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  return (
    <>
      {shirtsData?.products != undefined ? (
        <div className="grid grid-cols-7 gap-4 px-4 my-5">
          {shirtsData?.products.map((item) => {
            return (
              <div className=" block max-w-sm p-6 border rounded-2xl" key={item.id}>
                <img className="rounded-base" src={item.images[0]} alt="" />
                <p className="mb-3  tracking-tight text-heading leading-8">
                  {item.title}
                </p>
                <p className="mb-3  tracking-tight text-heading leading-8">
                 Price : ${item.price}
                </p>
                <Link to={`/shirts/${item.id}`}>
                <button className="border bg-black text-white px-9 py-1 rounded-2xl cursor-pointer">View Item</button>
                </Link>
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

export default Shirts;