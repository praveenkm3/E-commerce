 import { useEffect,useState } from "react";
//usesearch
import UseSearch from "../assets/User/SearchContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Navbar from "../components/Navbar";

import MediaCard from "../components/Product";
function Sports() {
  
  //debouncesearch
  const [debounceSearch, setDebounceSearch] = useState("");
  const [isLoading, setLoading] = useState(true);

  //use search
  const { searchText } = UseSearch();
 
  const [sportsData, setSportsData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((res) => {
        setSportsData(res);
      setLoading(false);
      })
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  //search after 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(searchText);
    }, 900);
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
        <div className="grid grid-cols-5 gap-4 px-4 my-5 mt-20">
          {filteredProducts?.map((item) => {
            
            return (
             <MediaCard item={item} key={item.id}/>
            );
          })}
        </div>
      ) : (
        <Backdrop
          sx={(theme) => ({
            color: "#fff",
            zIndex: theme.zIndex.drawer + 1,
          })}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}
export default Sports;

 