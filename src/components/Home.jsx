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
        
    </div>
  );
}
export default Home;
