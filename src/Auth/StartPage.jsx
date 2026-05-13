import { useState } from "react"; 
import Login from "./Login";
import Signup from "./Signup";
import Home from "../components/Home";
function StartPage(){
    const [isOpen,setOpen]=useState(false);//mobile view
    const [isLogin, setLogin] = useState(false);//login popup
    const [isSign, setSign] = useState(false);//login popup
    return (
        <> 
        
        <div className="fixed w-full z-50">
        
        <nav className="bg-black font-bold border-2 top-0">
            <div className=" h-16 items-center flex justify-between">
                <div className="font-bold text-white px-4 text3xl">E-Cart</div>
            
             {/* desktop */}
                <div className="hidden sm:block space-x-10">
                    <button className="text-gray-300 text-lg px-4 " onClick={()=>{
                        if(isSign===true){
                            setSign(false);
                        }
                        return setLogin(!isLogin)}}>Login</button>
                    <button className="text-gray-300 text-lg px-4 "onClick={()=>{
                        if(isLogin===true){
                            setLogin(false);
                        }
                        return setSign(!isSign)}}>Signup</button>
                </div>
                

                <button onClick={()=>setOpen(!isOpen)} className="block sm:hidden text-gray-400 text-lg px-4">Open</button>
            </div> 

            {/* mobile */}
                <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-100  pb-3 space-y-2`}>
                    <button className="text-gray-400 text-lg px-4 block" onClick={()=>{
                        if(isSign===true){
                            setSign(false);
                        }
                        return setLogin(!isLogin)}}>Login</button>
                    <button className="text-gray-400 text-lg px-4 block"onClick={()=>{
                        if(isLogin===true){
                            setLogin(false);
                        }
                        return setSign(!isSign)}}>Signup</button>
                </div>

            {/* login box */}
                
        </nav> 

        <div className={`${isLogin ? "block" : "hidden"} mt-45`}>
                    <Login/>{/* wrap login component */}
        </div>
        <div className={`${isSign ? "block" : "hidden"} mt-45`}>
                    <Signup/>{/* wrap login component */}
        </div>
        </div>
        <button onClick={()=>{
            if(isLogin===true){
                setLogin(false);
            }
            return setSign(!isSign)}}>

        
        <Home/> 
        </button>
        </>
    )
}
export default StartPage;