import MediaCard from "../components/Product";
import Navbar from "../components/Navbar";
//usecart
import UseSearch from "../assets/User/SearchContext";

import { useState, useEffect } from "react";
function Shirts() {
  //use search
  const { searchText } = UseSearch();
  const [shirtsData, setShirtsData] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((res) => setShirtsData(res))
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  //filter on search value
  const filteredProducts = shirtsData?.products
    ? shirtsData.products.filter((item) => {
        if (!searchText.trim()) return true;
        return item.title
          .toLowerCase()
          .startsWith(searchText.trim().toLowerCase());
      })
    : [];

  return (
    <>
      <Navbar />
      {shirtsData?.products != undefined ? (
        <div className="grid grid-cols-5 gap-4 px-4 my-5">
          {filteredProducts?.map((item) => {
            return <MediaCard item={item} key={item.id} />;
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
