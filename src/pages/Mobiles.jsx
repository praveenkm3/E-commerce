import MediaCard from "../components/Product";
import UseSearch from "../assets/User/SearchContext";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Mobiles() {
  //usesearch
  const { searchText } = UseSearch();
  const [phonesData, setPhonesData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((res) => {
        setPhonesData(res);
        setLoading(false);
      })
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

export default Mobiles;
