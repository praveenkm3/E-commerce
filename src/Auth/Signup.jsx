import {  useState } from "react";

function Signup(){
    const[user,setUser]=useState({
        email:"",
        password:""
    });
    function handleChange(event){
        //password ,enteredpassword
        //email ,enteredemail
        const {name,value}=event.target;
        setUser((prev)=>({...prev,[name]:value}))
    }
    function handleSubmit(){
        // console.log(user);
        if(user.email ==="" || user.password ===""){
            alert("Enter detaila")
        }else{
            localStorage.setItem("user",JSON.stringify(user))
            alert("Signup success");
            setUser({email:"",password:""})
        }
        
    }
    return(
        <div className="bg-white opacity-80 flex flex-col place-items-center-safe w-100 justify-self-center-safe mt-5  rounded-2xl h-70">
            
            <h2 className="text- font-serif text-2xl">Sign up</h2>
            <div>
            <h5 className="mt-5 text-black font-mono font-bold">Email</h5>
            <input 
            type="text" 
            name="email"
            placeholder="Enter email" 
            className="border mt-2 mb-2 font-serif py-2 px-4 w-70 rounded-sm"
            value={user.email}
            onChange={handleChange}
            />
            </div>
            <div>
                <h5 className=" text-black font-mono font-bold">Password</h5>
                <input 
                name="password"
                type="password"
                placeholder="Enter password" 
                className="border mt-2 font-serif py-2 px-4 w-70 rounded-sm"
                value={user.password}
                onChange={handleChange}

             />
            </div>
           <button 
           onClick={handleSubmit}
           className="border mt-5 mb-5 px-10 py-1 rounded-sm cursor-pointer bg-black text-white hover:text-orange-400">Sign Up</button>
        </div>
    )
}
export default Signup;