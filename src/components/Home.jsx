import { Link } from "react-router";
import HomeProduct from "./HomeProduct";
import { Typography, Box } from "@mui/material"; 
import { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const mobiles= [
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/3.webp"
      ]
function Home() {
  const [shirtsData, setShirtsData] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mobile-accessories")
      .then((res) => res.json())
      .then((res) => {
        setShirtsData(res);
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
            />
          </div>
        </Link>

        <Link to={`/accessories`}>
          <div>
            <img
              className="rounded-3xl"
              src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/ca5740248470472b.png?q=60"
              alt=""
            />
          </div>
        </Link>
        <Link to={`/sports`}>
          <div>
            <img
              className="rounded-3xl"
              src="https://rukminim2.flixcart.com/fk-p-flap/480/230/image/23ab51281ae2efde.png?q=90"
              alt=""
            />
          </div>
        </Link>
      </div>
      <Link to={`/laptops`}>
        <div className="mt-2 rounded-sm">
          <img
            className="rounded-3xl"
            src="https://rukminim2.flixcart.com/fk-p-flap/3140/700/image/6345053a799770a1.png?q=60"
            alt=""
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
        <Link to={"/shirts"}>
          {shirtsData.products ? (
            <div className="grid grid-cols-5 gap-4 ">
              {shirtsData.products.slice(0, 5).map((item, index) => {
                return <HomeProduct item={item} key={index} />;
              })}
            </div>
          ) : (
            <h2>No data</h2>
          )}
        </Link>
        <Typography
            variant="h4"
            sx={{ fontFamily: "-apple-system", pl: 3, pt: 2 ,mt:4}}
          >
            New Launches
          </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 3,
            mt:4
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateRows:"3"
            }}
          >
            <Box 
              component="img"
              height="194"
              src="https://i.pinimg.com/736x/dc/0a/d4/dc0ad4517658009fd943064090bba4e5.jpg"
            />
                {shirtsData.products ? (
             <Link to={'/mobiles'}>
            <Box sx={{mt:3,gap:3,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(2, 1fr)",height:450}}>
              {shirtsData.products.slice(0, 6).map((item,index) => {
                  return <HomeProduct item={item} key={index} />;
                  
                })}
            </Box>
            </Link>
             
          ) : (
            <h2>No data</h2>
          )}
            
          </Box>

          <Box sx={{bgcolor:"#ACBAC4"}}>
            <Carousel axis="horizontal" autoPlay="true" interval="3000" stopOnHover="true" autoFocus="true">
          {mobiles.map((img) => {
            return <img src={img}></img>;
          })}
        </Carousel>
          </Box>
        </Box>
      </div>
    </div>
  );
}
export default Home;


        //  sx={{height:"100%",borderRadius:4,width:"100%"}}
        //     component="img"
        //     src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQMkdzje-f59jzrsFwOAPZGmgxw_1FTdHWp_z6pc5L8DcvIyBkRtiTvQUxQdVPbe9CHJrHWWhU7C4GXos0WS2bG5q_ppGFH_f3QorkfU1f6wUqfgKp9CgfIow"
          