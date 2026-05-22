import MediaCard from "../components/Product";
import Navbar from "../components/Navbar";
//usecart
import UseSearch from "../assets/User/SearchContext";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useState, useEffect } from "react";
function Shirts() {
  //use search
  const { searchText } = UseSearch();
  const [shirtsData, setShirtsData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((res) => {
        setShirtsData(res);
        setLoading(false);
      })
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

export default Shirts;
