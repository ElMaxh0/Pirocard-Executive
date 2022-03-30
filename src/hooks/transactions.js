import React, { createContext, useContext, useState } from "react";

export var transacoesentrada =[

]
export const TransacrionsContext = createContext();
export default function TransacrionsProvider({children}){
    const[Transacrions, setTransacrions]= useState(transacoesentrada);
    return <TransacrionsContext.Provider value={{Transacrions,setTransacrions}}>{children}</TransacrionsContext.Provider>
}
export function useTransacrions(){
    const context= useContext(TransacrionsContext)
    const {Transacrions, setTransacrions} = context;
    return {Transacrions, setTransacrions}

}