 
import MediaCard from '../components/Product';
//usesearch
import UseSearch from "../assets/User/SearchContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Navbar from "../components/Navbar";
import { useState, useEffect } from "react"; 

function Laptops() {
  //use search
  const{searchText,removeSearch}=UseSearch();
  const [isLoading, setLoading] = useState(true);
  const [dbounceSearch,setDebounceSearch]=useState("");
  
  const [laptopsData, setLaptopsData] = useState({});
  
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((res) => {
        setLaptopsData(res);
        setLoading(false);
        removeSearch("");
      })
      .catch((err) => console.log("Error occurs ", err));
  }, []);
//navbar search
  const filteredProducts = laptopsData?.products ? laptopsData.products.filter((item) => {
        if (!dbounceSearch.trim()) return true; 
  return item.title.toLowerCase().startsWith(dbounceSearch.trim().toLowerCase());
}) : [];
useEffect(()=>{
  const timer=setTimeout(()=>{
    setDebounceSearch(searchText);
  },900);
  return()=>clearTimeout(timer);
},[searchText])
  
  
  return (
    <>
    <Navbar/>
      {laptopsData?.products != undefined ? (
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
 
export default Laptops;