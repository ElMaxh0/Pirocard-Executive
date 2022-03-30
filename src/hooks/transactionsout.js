import React, { createContext, useContext, useState } from "react";

export var transacoessaida =[
    ,

]
export const TransacrionsoutContext = createContext();
export default function TransacrionsoutProvider({children}){
    const[Transacrionsout, setTransacrionsout]= useState(transacoessaida);
    return <TransacrionsoutContext.Provider value={{Transacrionsout,setTransacrionsout}}>{children}</TransacrionsoutContext.Provider>
}
export function useTransacrionsout(){
    const context= useContext(TransacrionsoutContext)
    const {Transacrionsout, setTransacrionsout} = context;
    return {Transacrionsout, setTransacrionsout}

}