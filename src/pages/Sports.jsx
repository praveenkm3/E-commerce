 import { useEffect,useState } from "react";
//usesearch
import UseSearch from "../assets/User/SearchContext";
 
import Navbar from "../components/Navbar";

import MediaCard from "../components/Product";
function Sports() {
  //debouncesearch
  const [debounceSearch, setDebounceSearch] = useState("");
  //use search
  const { searchText } = UseSearch();
 
  const [sportsData, setSportsData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((res) => setSportsData(res))
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  //search after 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(searchText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  //navbar search
  const filteredProducts = sportsData?.products
    ? sportsData.products.filter((item) => {
        if (!debounceSearch.trim()) return true;
        return item.title
          .toLowerCase()
          .startsWith(debounceSearch.trim().toLowerCase());
      })
    : [];


  return (
    <>
      <Navbar />

      {sportsData?.products != undefined ? (
        <div className="grid grid-cols-5 gap-4 px-4 my-5">
          {filteredProducts?.map((item) => {
            
            return (
             <MediaCard item={item} key={item.id}/>
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

 