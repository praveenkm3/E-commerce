import { Link } from "react-router";
import HomeProduct from "./HomeProduct";
import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import CardMedia from "@mui/material/CardMedia"; 
import { Carousel } from "react-responsive-carousel";
const mobiles = [
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
  "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp",
];
function Home() {
  const [accessData, setAccessData] = useState({});
  const [mobileData, setMobileData] = useState({});
  const [sportData, setSportData] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mobile-accessories")
      .then((res) => res.json())
      .then((res) => {
        setAccessData(res);
      })
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((res) => {
        setMobileData(res);
      })
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((res) => {
        setSportData(res);
      })
      .catch((err) => console.log("Error occurs ", err));
  }, []);
  return (
    <div className="ml-2 me-2 bg-[#F5F5F5] px-8 pt-18">
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Link to={`/mobiles`}>
          <div>
            <img
              className="rounded-3xl"
              src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/5623704a356b5857.png?q=60"
              alt=""
              loading="lazy"
            />
          </div>
        </Link>

        <Link to={`/accessories`}>
          <div>
            <img
              className="rounded-3xl"
              src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/ca5740248470472b.png?q=60"
              alt=""
              loading="lazy"
            />
          </div>
        </Link>
        <Link to={`/sports`}>
          <div>
            <img
              className="rounded-3xl"
              src="https://rukminim2.flixcart.com/fk-p-flap/480/230/image/23ab51281ae2efde.png?q=90"
              alt=""
              loading="lazy"
            />
          </div>
        </Link>
      </div>
      <Link to={`/laptops`}>
        <div className="mt-2 rounded-sm width:690px height:150px">
          <img
            className="rounded-3xl"
            src="https://rukminim2.flixcart.com/fk-p-flap/3140/700/image/6345053a799770a1.png?q=60"
            alt=""
            style={{ width: "1200", height: "300" }}
          />
        </div>
      </Link>

      <div className="">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "-apple-system", pl: 3, pt: 2 }}
          >
            Accessories
          </Typography>
          <Link to={"/accessories"}>
            <Typography variant="h3" sx={{ mr: 2, color: "blue", pt: 1 }}>
              <ArrowForwardIcon />
            </Typography>
          </Link>
        </Box>
        <Link to={"/accessories"}>
          {accessData.products ? (
            <div className="grid grid-cols-5 gap-4 ">
              {accessData.products.slice(0, 5).map((item, index) => {
                return <HomeProduct item={item} key={index} />;
              })}
            </div>
          ) : (
            <h2>No data</h2>
          )}
        </Link>
        <Typography
          variant="h4"
          sx={{ fontFamily: "-apple-system", pl: 3, pt: 2, mt: 4 }}
        >
          New Launches
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 3,
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "3",
            }}
          >
            <Box
              component="img"
              height="194"
              src="https://i.pinimg.com/736x/dc/0a/d4/dc0ad4517658009fd943064090bba4e5.jpg"
            />
            {mobileData.products ? (
              <Link to={"/mobiles"}>
                <Box
                  sx={{
                    mt: 3,
                    gap: 3,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(2, 1fr)",
                    height: 450,
                  }}
                >
                  {mobileData.products.slice(0, 6).map((item, index) => {
                    return ( 
                        <Box sx={{ position: "relative" }} key={index} >
                          <CardMedia
                            component="img"
                            height="140"
                            image={item.images[0]}
                            alt="green iguana"
                            sx={{ bgcolor: "#E8EDF2" }}
                          />
                        </Box> 
                    );
                  })}
                </Box>
              </Link>
            ) : (
              <h2>No data</h2>
            )}
          </Box>

          <Box sx={{ bgcolor: "#ACBAC4" }}>
            <Carousel
              axis="horizontal"
              autoPlay="true"
              interval="3000"
              stopOnHover="true"
              autoFocus="true"
            >
              {mobiles.map((img) => {
                return <img src={img} loading="lazy"></img>;
              })}
            </Carousel>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "690px",
            height: "64px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontFamily: "-apple-system", pl: 3, pt: 2 }}
          >
            Sport Accessories
          </Typography>
          <Link to={"/sports"}>
            <Typography variant="h3" sx={{ mr: 2, color: "blue", pt: 1 }}>
              <ArrowForwardIcon />
            </Typography>
          </Link>
        </Box>
        <Link to={"/sports"}>
          {sportData.products ? (
            <div className="grid grid-cols-5 gap-4 ">
              {sportData.products.slice(0, 5).map((item, index) => {
                return <HomeProduct item={item} key={index} />;
              })}
            </div>
          ) : (
            <h2>No data</h2>
          )}
        </Link>
      </div>
    </div>
  );
}
export default Home;
