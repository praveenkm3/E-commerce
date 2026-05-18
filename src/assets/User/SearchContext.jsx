import { useContext,createContext } from "react";
import { useState } from "react";
const searchContext=createContext();
export function SearchContextProvider({children}){
    const[searchText,setSearch]=useState("");
    function addSearch(value){
        setSearch(value);
    }
    function removeSearch(){
        setSearch("");
    }
    return(
        <>
        <searchContext.Provider value={{searchText,addSearch,removeSearch}}>
            {children}
        </searchContext.Provider>
        </>
    )
}
export default function UseSearch(){
    return useContext(searchContext);
}

