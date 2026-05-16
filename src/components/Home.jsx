import { Link } from "react-router";

function Home() {
  return (
    <div className="ml-2 me-2 bg-white px-3">
        <div className="py-10">
            <h1> </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
            <Link to={`/mobiles`}>
                <div >
                    <img className="rounded-3xl" src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/5623704a356b5857.png?q=60" alt="" />
                </div>
            </Link>
            
            <Link to={`/accessories`}>
                <div>
                    <img className="rounded-3xl" src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/ca5740248470472b.png?q=60" alt="" />
                </div>
            </Link>
            <Link to={`/sports`}>
                <div>
                    <img className="rounded-3xl" src="https://rukminim2.flixcart.com/fk-p-flap/480/230/image/23ab51281ae2efde.png?q=90" alt="" />
                </div>
            </Link>
        </div>
        <Link to={`/laptops`}>
        
            <div className="mt-2 rounded-sm">
                <img className="rounded-3xl" src="https://rukminim2.flixcart.com/fk-p-flap/3140/700/image/6345053a799770a1.png?q=60" alt="" />
            </div>
        </Link>
        <div className="flex">
            <h1 className="font-bold mt-6 mb-6 text-2xl ">Most Selled Jersies</h1>
        </div>
        <Link to={'/shirts'}>
        
            <div className="grid grid-rows-auto grid-cols-2  sm:grid-cols-6 mt-3  h-70 w-full">
                <div className=" w-45 h-45 items-center-safe">
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/6/n/m/s-mi045-lini-original-imahayebdhbyvgfy.jpeg?q=70" alt="" />
                </div>
                <div className=" w-45 h-45">
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/v/2/xxl-fk-rcb-26-polo-m2-2xs-royal-hitters-original-imahm2yrsbhhz5vm.jpeg?q=70" alt="" />
                </div>
                <div className="w-45 h-45">
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/x/g/9/s-cskk-2026-msd-yellow-cutis-original-imahmmvtwj2ctsvt.jpeg?q=70" alt="" />
                </div>
                <div className=" w-45 h-45">
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/n/5/c/xxl-team-india-t20-cricket-jersey-technolink-original-imahjrt7e2gpy42w.jpeg?q=70" alt="" />
                </div>
                <div className=" w-45 h-45">
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/f/v/r/s-fk-ronaldo7-0-dostitch-original-imah7jvbkfzsgahf.jpeg?q=70" alt="" />
                </div>
                <div className=" w-45 h-45">
                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/k/i/l-080-homearg2022-m10-be-smv-original-imagt6emgvhjvszp.jpeg?q=70" alt="" />
                </div>
            </div>
        </Link>
    </div>
  );
}
export default Home;
