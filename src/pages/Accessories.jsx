import MediaCard from "../components/Product";
//usesearch
import UseSearch from "../assets/User/SearchContext";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Accessories() {
  //use search
  const { searchText } = UseSearch();
  const [isLoading, setLoading] = useState(true);
  const [accessData, setAccessData] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mobile-accessories")
      .then((res) => res.json())
      .then((res) => {
        setAccessData(res);
        setLoading(false);
      })
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  //navbar search
  const filteredProducts = accessData?.products
    ? accessData.products.filter((item) => {
        if (!searchText.trim()) return true;
        return item.title
          .toLowerCase()
          .startsWith(searchText.trim().toLowerCase());
      })
    : [];

  return (
    <>
      <Navbar />
      {accessData?.products != undefined ? (
        <div className="grid grid-cols-5 gap-4 px-4 my-5 mt-20">
          {filteredProducts?.map((item) => {
            return <MediaCard item={item} key={item.id} />;
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
export default Accessories;
