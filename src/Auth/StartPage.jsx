import { Link } from "react-router";
import { Button } from "@mui/material";
function StartPage() { 
  return (
    <>
      <div className="fixed w-full z-50">
        <nav className="bg-black font-bold border-2 top-0">
          <div className=" h-16 items-center flex justify-between">
            <div className="font-bold text-white px-4 text3xl">E-Cart</div>

            {/* desktop */}
            <div className="hidden sm:block space-x-10"> 
                <Link to={'/login'}>
                  <Button className="text-gray-300 text-lg px-4 ">Login</Button>
                </Link>
                <Link to={'/signup'}>
                  <Button className="text-gray-300 text-lg px-4 ">Signup</Button>
                </Link>
              
            </div>
          </div>
        </nav>
      </div>

       
    </>
  );
}
export default StartPage;
