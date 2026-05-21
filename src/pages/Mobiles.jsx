import MediaCard from "../components/Product";
import UseSearch from "../assets/User/SearchContext";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
function Mobiles() {
  //usesearch
  const { searchText } = UseSearch();
  const [phonesData, setPhonesData] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((res) => setPhonesData(res))
      .catch((err) => console.log("Error occurs ", err));
  }, []);

  //navbar search
  const filteredProducts = phonesData?.products
    ? phonesData.products.filter((item) => {
        if (!searchText.trim()) return true;
        return item.title
          .toLowerCase()
          .startsWith(searchText.trim().toLowerCase());
      })
    : [];

  return (
    <>
      <Navbar />
      {phonesData?.products != undefined ? (
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

export default Mobiles;
